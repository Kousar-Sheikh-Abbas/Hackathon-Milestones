document.addEventListener('DOMContentLoaded', function () {
    var generateButton = document.getElementById('generateButton');
    var resumeForm = document.getElementById('resumeForm');
    var resumeOutput = document.getElementById('resumeOutput');
    generateButton.addEventListener('click', function () {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var skills = document.getElementById('skills').value;
        var education = document.getElementById('education').value;
        var workExperience = document.getElementById('workExperience').value;
        resumeOutput.innerHTML = "\n            <h2>".concat(name, "</h2>\n            <p>Email: ").concat(email, "</p>\n            <p>Phone: ").concat(phone, "</p>\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n            <h3>Work Experience</h3>\n            <p>").concat(workExperience, "</p>\n        ");
        resumeOutput.scrollIntoView({ behavior: 'smooth' });
    });
});
