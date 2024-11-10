window.onload = function () {
    // Dynamic content population
    var name = "Rana Bisma";
    var role = "Web Developer";
    var email = "ranabismah178@gmail.com";
    var phone = "03140209884";
    var profileImage = "profile.JPG";
    // Fill in dynamic data
    var nameElement = document.getElementById('name');
    if (nameElement)
        nameElement.innerText = name;
    var roleElement = document.getElementById('role');
    if (roleElement)
        roleElement.innerText = role;
    var emailElement = document.getElementById('email');
    if (emailElement)
        emailElement.innerText = email;
    var phoneElement = document.getElementById('phone');
    if (phoneElement)
        phoneElement.innerText = phone;
    var profileImageElement = document.getElementById('profileImage');
    if (profileImageElement)
        profileImageElement.setAttribute('src', profileImage);
    // Professional Experience
    var experienceList = [
        "Fresher",
        "When I was at my studying level, I created many projects."
    ];
    var experienceHTML = experienceList.map(function (item) { return "<li><p>".concat(item, "</p></li>"); }).join('');
    var experienceElement = document.getElementById('experience-list');
    if (experienceElement) {
        experienceElement.innerHTML = experienceHTML;
    }
    // Button functionality for PDF download
    var downloadBtn = document.getElementById('downloadBtn');
    downloadBtn.addEventListener('click', function () {
        alert("PDF Download feature coming soon!");
    });
};
