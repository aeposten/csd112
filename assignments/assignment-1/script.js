// Variables for DOM elements
const cssToggleButton = document.getElementById('css-toggle');

// Event Listner for CSS toggle
cssToggleButton.addEventListener('click', toggleCss);

// Toggles CSS on and off by disablind/enabling stylesheet
function toggleCss(){
    const styleSheet = document.querySelector('link[rel="stylesheet"]');

    styleSheet.disabled = !styleSheet.disabled;
}