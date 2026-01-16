// Variables for DOM elements
const cssToggleButton = document.getElementById('css-toggle');
const buttonText = cssToggleButton.textContent;
// Event Listner for CSS toggle
cssToggleButton.addEventListener('click', toggleCss);

// Toggles CSS on and off by disablind/enabling stylesheet
function toggleCss() {
    const styleSheet = document.querySelector('link[rel="stylesheet"]');

    styleSheet.disabled = !styleSheet.disabled;

    if (styleSheet.disabled) {
        cssToggleButton.textContent = "Enable Magic";
        cssToggleButton.setAttribute('aria-pressed', 'true');
    } else {
        cssToggleButton.textContent = "Disable Magic";
        cssToggleButton.setAttribute('aria-pressed', 'false');
    }
}