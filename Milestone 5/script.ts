document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generateButton') as HTMLButtonElement;
    const downloadButton = document.getElementById('downloadButton') as HTMLButtonElement;
    const resumeOutput = document.getElementById('resumeOutput') as HTMLElement;

    generateButton.addEventListener('click', () => {
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
        const education = (document.getElementById('education') as HTMLInputElement).value;
        const workExperience = (document.getElementById('workExperience') as HTMLTextAreaElement).value;

        resumeOutput.innerHTML = `
            <h3>${name}</h3>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <h4>Skills</h4>
            <p>${skills}</p>
            <h4>Education</h4>
            <p>${education}</p>
            <h4>Work Experience</h4>
            <p>${workExperience}</p>
        `;
        
        resumeOutput.scrollIntoView({ behavior: 'smooth' });

        // Show the download button after generating the resume
        downloadButton.hidden = false;
    });

    downloadButton.addEventListener('click', () => {
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
        const education = (document.getElementById('education') as HTMLInputElement).value;
        const workExperience = (document.getElementById('workExperience') as HTMLTextAreaElement).value;

        const resumeContent = `
            Name: ${name}
            Email: ${email}
            Phone: ${phone}

            Skills:
            ${skills}

            Education:
            ${education}

            Work Experience:
            ${workExperience}
        `;

        const blob = new Blob([resumeContent], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${name}_Resume.txt`;
        link.click();
    });
});

