function changeButtonColor() {
    const playButton = document.querySelector("span.icon-common-play")?.closest("button");

    if (playButton) {
        playButton.style.backgroundColor = "#00B170";
    }
}

const observer = new MutationObserver(changeButtonColor);
observer.observe(document.body, { childList: true, subtree: true });

changeButtonColor();