const toggleButton = document.getElementById('toggle-button') as HTMLElement;
const skillsSection = document.getElementById('skills-section') as HTMLElement;

toggleButton.addEventListener('click', () => {
    // Toggle the visibility of the 'skillsSection' element
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';  // Show it if it's hidden
    } else {
        skillsSection.style.display = 'none';   // Hide it if it's visible
    }
});
