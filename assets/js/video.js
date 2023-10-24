function activateVideos() {
  const iframes = document.querySelectorAll('.video__iframe[data-src*="youtube-nocookie.com"]');
  iframes.forEach((iframe) => {
    iframe.src = iframe.dataset.src;
  });
}

function attachEvents() {
  const notices = document.querySelectorAll('.video__notice');
  notices.forEach((notice) => {
    notice.addEventListener('submit', (event) => {
      activateVideos();
    });
  });
}
