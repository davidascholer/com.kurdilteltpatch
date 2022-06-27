const listener = () => {
    const MIN_KEYBOARD_HEIGHT = 300 // N.B.! this might not always be correct

    const isMobile = window.innerWidth < 768
    const isKeyboardOpen = isMobile
        && window.screen.height - MIN_KEYBOARD_HEIGHT > window.visualViewport.height;

    const height = window.innerHeight;
    const isMobileLandscape = height < 768
        && window.innerWidth > height;

    const top = document.querySelector('.top');

    //
    if (isKeyboardOpen || isMobileLandscape) {
        document.querySelector('.middle-container').style.zIndex = '2';
        top.classList.remove('grow-top');
        top.classList.add('shrink-top');
    } else {
        document.querySelector('.middle-container').style.zIndex = '0';
        top.classList.remove('shrink-top');
        top.classList.add('grow-top');
    }
}

// Set up a viewport listener to help us try to detect the keyboard
window.visualViewport.addEventListener('resize', listener);
