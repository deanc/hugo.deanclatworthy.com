---
title: Unique filenames when uploading using Zend_Filter_File_Rename (Zend Framework)
author: Dean
layout: post
url: /2012/07/unique-filenames-when-uploading-using-zend_filter_file_rename-zend-framework/
image:
  - //deanclatworthy.com/img/uploads/2011/07/matrix.jpg
dsq_thread_id:
  - 794523075
categories:
  - PHP
  - Zend Framework
date: 2012-07-19
---
I came across a scenario today where I needed to ensure that files uploaded always had a unique name and wouldn't over-write a file which has the same name. ZF provides this facility but it's not particularly well documented and I had some troubles using a couple of examples I found across the web. Alas, here is the solution.
<!--more-->

**Create a new form element**

Whether you do this in a new instance of Zend\_Form or one you instantiate in your controller is up to you. My example adds it to an instance of Zend\_Form:

```php
$element = new Zend_Form_Element_File('screenshot');
$element->setLabel(null)->setDestination(APPLICATION_PATH . '/path/to/uploads');
$element->addValidator('Count', false, 5);
$element->addValidator('Extension', false, 'jpg,png,gif');
$element->setRequired(true);
$this->addElement($element, 'foo');
```

**Handle the upload before the file is saved in your controller:**

By getting access to Zend\_File\_Transfer\_Adapter\_Http we can intercept the file before it is moved to the already-defined destination path. At this point we apply a filter to the upload which will rename the file.

```php
$post = $request->getPost(); // This contains the POST params
 
if ($request->isPost()) {
    if ($form->isValid($post)) {

        $upload = new Zend_File_Transfer_Adapter_Http();
        $filename = $upload->getFilename();
        $filename = basename($filename);


        $uniqueToken = md5(uniqid(mt_rand(), true));
        $filterRename = new Zend_Filter_File_Rename(array('target' => '/path/to/uploads/' . $uniqueToken.$filename, 'overwrite' => false));
        $upload->addFilter($filterRename);

        if (!$upload->receive()) {
            $this->view->message = 'Error receiving the file';
            return;
        }

        $this->view->message = 'Screenshot(s) successfully uploaded';
    }
}
```