// Preloader

document.addEventListener('DOMContentLoaded', () => {
    const removePreloader = () => {
        document.body.classList.remove('loading');
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.remove();
        }
    };

    const stylesLoaded = () => {
        const styles = Array.from(document.styleSheets);
        return styles.every(style => {
            try {
                return style.cssRules.length > 0;
            } catch (e) {
                return true; // Handle cross-origin stylesheets
            }
        });
    };

    if (stylesLoaded()) {
        removePreloader();
    } else {
        window.addEventListener('load', removePreloader);
    }
});


// own query selector
let $f = function (object) {
    return document.querySelector(object);
};

let DARKMODE: boolean;

// apply mode
const setClassToBody = () => {
    if (DARKMODE) {
        $f('body')?.classList.remove('light');
        $f('body')?.classList.add('dark');
    } else {
        $f('body')?.classList.remove('dark');
        $f('body')?.classList.add('light');
    }
    // console.log("darkmode = " + DARKMODE)
}

// settings from locale storage available?
switch (localStorage.getItem('darkmode')) {
    case null:
        // First Visit = unavailable
        DARKMODE = window.matchMedia('(prefers-color-scheme: dark)').matches;
        localStorage.setItem('darkmode', String(DARKMODE));
        break;
    case 'true':
        DARKMODE = true;
        break;
    case 'false':
        DARKMODE = false;
        break;
    default:
        console.log("INFO: Unable to read theme preference from system");
        DARKMODE = false;
        break;
}
setClassToBody();

// implement Theme-Button to switch Theme
const switchMode = () => {
    DARKMODE = !DARKMODE;
    localStorage.setItem('darkmode', String(DARKMODE));
    setClassToBody();
    const input = document.getElementById('switch');
    if (input) {
        input.innerText = DARKMODE ? "Lightmode" : "Darkmode";
    }
};

const input = document.getElementById('switch');
if (input == null) {
    console.log("INFO: no Theme Button found");
} else {
    input.addEventListener('click', switchMode);
    setClassToBody();
}

// console.log("function js fin")
