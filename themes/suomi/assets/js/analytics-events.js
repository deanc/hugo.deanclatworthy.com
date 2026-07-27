(function () {
  "use strict";

  if (window.suomiAnalyticsEventsInitialized) {
    return;
  }
  window.suomiAnalyticsEventsInitialized = true;

  var analyticsScript = document.currentScript;

  function sendEvent(name, parameters) {
    if (typeof window.gtag !== "function") {
      return;
    }

    parameters = parameters || {};
    parameters.transport_type = "beacon";
    window.gtag("event", name, parameters);
  }

  function linkText(link) {
    return (link.textContent || "").replace(/\s+/g, " ").trim().slice(0, 100);
  }

  function linkLocation(link) {
    var container = link.closest("header, footer, nav, main");
    return container ? container.tagName.toLowerCase() : "body";
  }

  function analyticsUrl(url) {
    return (url.origin + url.pathname).slice(0, 500);
  }

  document.addEventListener("click", function (event) {
    var link = event.target.closest("a[href]");
    if (!link) {
      return;
    }

    var url;
    try {
      url = new URL(link.href, window.location.href);
    } catch (error) {
      return;
    }

    if (link.hasAttribute("data-contact-cta") &&
        url.origin === window.location.origin &&
        (url.pathname === "/contact.html" || url.pathname === "/contact/")) {
      sendEvent("contact_cta_click", {
        link_text: linkText(link),
        link_url: analyticsUrl(url),
        link_location: linkLocation(link)
      });
      return;
    }

    if ((url.protocol === "http:" || url.protocol === "https:") &&
        url.origin !== window.location.origin) {
      sendEvent("outbound_link_click", {
        link_text: linkText(link),
        link_url: analyticsUrl(url),
        link_domain: url.hostname,
        link_location: linkLocation(link)
      });
    }
  });

  var contactForm = document.querySelector('form[action^="https://formspree.io/"]');
  if (contactForm) {
    contactForm.addEventListener("submit", function () {
      sendEvent("generate_lead", {
        form_id: contactForm.id || "contact-form",
        form_name: "contact"
      });
    });
  }

  if (analyticsScript && analyticsScript.dataset.pageKind === "404") {
    sendEvent("page_not_found", {
      page_path: window.location.pathname,
      page_referrer: document.referrer
    });
  }
})();
