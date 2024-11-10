"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
window.onload = function () {
    // Dynamic content population
    const name = "Rana Bisma";
    const role = "web Developer";
    const email = "ranabismah178@gmail.com";
    const phone = "03140209884";
    const profileImage = "profile.JPG";
    // Fill in dynamic data
    document.getElementById('name').innerText = name;
    document.getElementById('role').innerText = role;
    document.getElementById('email').innerText = email;
    document.getElementById('phone').innerText = phone;
    document.getElementById('profileImage').setAttribute('src', profileImage);
    // Example dynamic content for professional experience
    const experienceList = [
        "fresher",
        "When i was on my stidying level I create many projects."
    ];
    let experienceHTML = '';
    experienceList.forEach(item => {
        experienceHTML += `<li><h3>${item.split(',')[0]}</h3><p>${item.split(',')[1]}</p></li>`;
    });
    document.getElementById('experience-list').innerHTML = experienceHTML;
    // Button functionality: Example of PDF download (just a placeholder action)
    const downloadBtn = document.getElementById('downloadBtn');
    downloadBtn.addEventListener('click', () => {
        alert("PDF Download feature coming soon!");
    });
};
