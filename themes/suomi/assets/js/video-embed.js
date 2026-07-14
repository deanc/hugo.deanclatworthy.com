const placeholders = document.querySelectorAll("[data-vimeo-id]");

for (const placeholder of placeholders) {
  placeholder.addEventListener("click", (event) => {
    const videoId = placeholder.dataset.vimeoId;

    if (!/^\d+$/.test(videoId)) {
      return;
    }

    event.preventDefault();

    const iframe = document.createElement("iframe");
    iframe.src = `https://player.vimeo.com/video/${videoId}?autoplay=1&byline=0&dnt=1&portrait=0&title=0`;
    iframe.title = placeholder.dataset.videoTitle || "Vimeo video";
    iframe.allow = "autoplay; fullscreen; picture-in-picture";
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = "strict-origin-when-cross-origin";

    placeholder.replaceWith(iframe);
  });
}
