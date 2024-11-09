window.onload = function() {
    // Dynamic content population
    const name: string = "Rana Bisma";
    const role: string = "web Developer";
    const email: string = "ranabismah178@gmail.com";
    const phone: string = "03140209884";
   
    const profileImage: string = "profile.JPG"; 
  
    // Fill in dynamic data
    document.getElementById('name')!.innerText = name;
    document.getElementById('role')!.innerText = role;
    document.getElementById('email')!.innerText = email;
    document.getElementById('phone')!.innerText = phone;
   
  
    
    document.getElementById('profileImage')!.setAttribute('src', profileImage);
  
    // Example dynamic content for professional experience
    const experienceList: string[] = [
        "fresher",
        "When i was on my stidying level I create many projects."
    ];
  
    let experienceHTML = '';
    experienceList.forEach(item => {
        experienceHTML += `<li><h3>${item.split(',')[0]}</h3><p>${item.split(',')[1]}</p></li>`;
    });
    document.getElementById('experience-list')!.innerHTML = experienceHTML;
  
    // Button functionality: Example of PDF download (just a placeholder action)
    const downloadBtn: HTMLButtonElement = document.getElementById('downloadBtn')! as HTMLButtonElement;
    downloadBtn.addEventListener('click', () => {
        alert("PDF Download feature coming soon!");
    });
  };
  
  