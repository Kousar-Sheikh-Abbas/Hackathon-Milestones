document.addEventListener('DOMContentLoaded', () => {
    const toggleSkillsButton = document.getElementById('toggleSkillsButton') as HTMLButtonElement;
    const skillsList = document.getElementById('skillsList') as HTMLUListElement;

    let skillsVisible = true;

    toggleSkillsButton.addEventListener('click', () => {
        skillsVisible = !skillsVisible;
        skillsList.style.display = skillsVisible ? 'block' : 'none';
        toggleSkillsButton.textContent = skillsVisible ? 'Hide Skills' : 'Show Skills';
    });
});
