document.addEventListener('DOMContentLoaded', function () {
    var toggleSkillsButton = document.getElementById('toggleSkillsButton');
    var skillsList = document.getElementById('skillsList');
    var skillsVisible = true;
    toggleSkillsButton.addEventListener('click', function () {
        skillsVisible = !skillsVisible;
        skillsList.style.display = skillsVisible ? 'block' : 'none';
        toggleSkillsButton.textContent = skillsVisible ? 'Hide Skills' : 'Show Skills';
    });
});
