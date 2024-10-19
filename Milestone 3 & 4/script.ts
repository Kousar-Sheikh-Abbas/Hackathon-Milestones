document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generateButton') as HTMLButtonElement;
    const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
    const resumeOutput = document.getElementById('resumeOutput') as HTMLElement;

    generateButton.addEventListener('click', () => {
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
        const education = (document.getElementById('education') as HTMLInputElement).value;
        const workExperience = (document.getElementById('workExperience') as HTMLTextAreaElement).value;

        resumeOutput.innerHTML = `
            <h2>${name}</h2>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Work Experience</h3>
            <p>${workExperience}</p>
        `;

        resumeOutput.scrollIntoView({ behavior: 'smooth' });
    });
});
