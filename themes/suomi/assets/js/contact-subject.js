(() => {
  const subject = new URLSearchParams(window.location.search).get("subject");
  const input = document.querySelector('#my-form input[name="subject"]');
  if (["SharePilot launch", "SharePilot support"].includes(subject) && input && !input.value) {
    input.value = subject;
  }
})();
