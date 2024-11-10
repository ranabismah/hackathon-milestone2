window.onload = function() {
    // Dynamic content population
    const name: string = "Rana Bisma";
    const role: string = "Web Developer";
    const email: string = "ranabismah178@gmail.com";
    const phone: string = "03140209884";
    const profileImage: string = "profile.JPG"; 

    // Fill in dynamic data
    const nameElement = document.getElementById('name');
    if (nameElement) nameElement.innerText = name;

    const roleElement = document.getElementById('role');
    if (roleElement) roleElement.innerText = role;

    const emailElement = document.getElementById('email');
    if (emailElement) emailElement.innerText = email;

    const phoneElement = document.getElementById('phone');
    if (phoneElement) phoneElement.innerText = phone;

    const profileImageElement = document.getElementById('profileImage');
    if (profileImageElement) profileImageElement.setAttribute('src', profileImage);

    // Professional Experience
    const experienceList: string[] = [
        "Fresher",
        "When I was at my studying level, I created many projects."
    ];

    const experienceHTML = experienceList.map(item => `<li><p>${item}</p></li>`).join('');
    const experienceElement = document.getElementById('experience-list');
    if (experienceElement) {
        experienceElement.innerHTML = experienceHTML;
    }

    // Button functionality for PDF download
    const downloadBtn: HTMLButtonElement = document.getElementById('downloadBtn') as HTMLButtonElement;
    downloadBtn.addEventListener('click', () => {
        alert("PDF Download feature coming soon!");
    });
};
