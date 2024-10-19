// Get references to the button and the skills section
const toggleButton = document.getElementById('toggle-button');
const skillsSection = document.getElementById('skills-section');

toggleButton.addEventListener('click', () => {
    // Toggle the visibility of the 'hi' element
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';  // Show it if it's hidden
    }

    else {
        skillsSection.style.display = 'none';   // Hide it if it's visible
    }
});