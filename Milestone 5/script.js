document.addEventListener('DOMContentLoaded', function () {
    var generateButton = document.getElementById('generateButton');
    var downloadButton = document.getElementById('downloadButton');
    var resumeOutput = document.getElementById('resumeOutput');
    generateButton.addEventListener('click', function () {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var skills = document.getElementById('skills').value;
        var education = document.getElementById('education').value;
        var workExperience = document.getElementById('workExperience').value;
        resumeOutput.innerHTML = "\n            <h3>".concat(name, "</h3>\n            <p>Email: ").concat(email, "</p>\n            <p>Phone: ").concat(phone, "</p>\n            <h4>Skills</h4>\n            <p>").concat(skills, "</p>\n            <h4>Education</h4>\n            <p>").concat(education, "</p>\n            <h4>Work Experience</h4>\n            <p>").concat(workExperience, "</p>\n        ");
        resumeOutput.scrollIntoView({ behavior: 'smooth' });
        // Show the download button after generating the resume
        downloadButton.hidden = false;
    });
    downloadButton.addEventListener('click', function () {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var skills = document.getElementById('skills').value;
        var education = document.getElementById('education').value;
        var workExperience = document.getElementById('workExperience').value;
        var resumeContent = "\n            Name: ".concat(name, "\n            Email: ").concat(email, "\n            Phone: ").concat(phone, "\n\n            Skills:\n            ").concat(skills, "\n\n            Education:\n            ").concat(education, "\n\n            Work Experience:\n            ").concat(workExperience, "\n        ");
        var blob = new Blob([resumeContent], { type: 'text/plain' });
        var link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = "".concat(name, "_Resume.txt");
        link.click();
    });
});
