export const video = () => {
  const unmuteBtns = document.querySelectorAll(".unmuteBtn");
  unmuteBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.previousElementSibling.muted) {
        btn.previousElementSibling.muted = false;
        btn.innerHTML = `<svg
      width="40px"
      height="40px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_15_174)">
        <path
          d="M3 16V8H6L11 4V20L6 16H3Z"
          stroke="#3964FF"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13 9C13 9 15 9.5 15 12C15 14.5 13 15 13 15"
          stroke="#3964FF"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15 7C15 7 18 7.83333 18 12C18 16.1667 15 17 15 17"
          stroke="#3964FF"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17 5C17 5 21 6.16667 21 12C21 17.8333 17 19 17 19"
          stroke="#3964FF"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>`;
      } else {
        btn.previousElementSibling.muted = true;
        btn.innerHTML = `<svg
      width="40px"
      height="40px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_15_183)">
        <path
          d="M3 16V8H6L11 4V20L6 16H3Z"
          stroke="#3964FF"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.5 15L20.5 9"
          stroke="#3964FF"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.5 9L20.5 15"
          stroke="#3964FF"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>`;
      }
    });
  });

  function hasAudio(video) {
    return (
      video.mozHasAudio ||
      Boolean(video.webkitAudioDecodedByteCount) ||
      Boolean(video.audioTracks && video.audioTracks.length)
    );
  }

  let videos = document.querySelectorAll("video");
  videos.forEach((video) => {
    if (!hasAudio(video) && video.nextElementSibling) {
      if (!video.nextElementSibling) {
        return;
      } else {
        video.nextElementSibling.classList.add("hidden");
      }
    }
    let observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            video.pause();
          } else {
            video.play();
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(video);
  });
};
