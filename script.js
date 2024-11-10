window.onload = function () {
    // Dynamic content population
    var name = "Rana Bisma";
    var role = "web Developer";
    var email = "ranabismah178@gmail.com";
    var phone = "03140209884";
    var profileImage = "profile.JPG";
    // Fill in dynamic data
    document.getElementById('name').innerText = name;
    document.getElementById('role').innerText = role;
    document.getElementById('email').innerText = email;
    document.getElementById('phone').innerText = phone;
    document.getElementById('profileImage').setAttribute('src', profileImage);
    // Example dynamic content for professional experience
    var experienceList = [
        "fresher",
        "When i was on my stidying level I create many projects."
    ];
    var experienceHTML = '';
    experienceList.forEach(function (item) {
        experienceHTML += "<li><h3>".concat(item.split(',')[0], "</h3><p>").concat(item.split(',')[1], "</p></li>");
    });
    document.getElementById('experience-list').innerHTML = experienceHTML;
    // Button functionality: Example of PDF download (just a placeholder action)
    var downloadBtn = document.getElementById('downloadBtn');
    downloadBtn.addEventListener('click', function () {
        alert("PDF Download feature coming soon!");
    });
};
