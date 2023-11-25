// wait for page to load before loading remaining scripts; create global variables
var templateElement = ''
var idList = []

window.onload = (function () {

    console.log("DOM ready, load remaining javascript")

    // constructor function for ID object just in case?
    function ID(name, title, company, experience, school, major, email, linkedIn, languages) {
        this.name = name;
        this.jobTitle = title;
        this.company = company;
        this.experience = experience;
        this.school = school;
        this.major = major;
        this.email = email;
        this.linkedInURL = linkedIn;
        this.languages = languages;
    }

    // identify template-hook location in page
    templateElement = document.querySelector('.template-hook')
  
    // invoke asynchronous fetching/loading and adding of data to page
        loadJSON();
})

async function loadJSON() {
        // load data from JSON file and store in idList
        const response = await fetch('./data/data.json');
        idList = await response.json()
        console.log(idList)

        // create and append a new article as the container for each ID card
    idList.forEach(el => {
        let newID = document.createElement('article')

        // use HTML from assignment 2 as innerHTML for each new element
        newID.innerHTML =
            `
    <div class="id-card">
        <div class="profile">
            <img class="headshot" src="/img/headshot.jpg"></img>
            <div class="name">${el.name}</div>
            <div class="job-title">${el.jobTitle}</div>
        </div>

    <div class="personal-attributes">
        <div class="attribute-name">Company:</div> 
        <div class="attribute-value">${el.company}</div>
        <br>
        <div class="attribute-name">Experience:</div> <div class="attribute-value">${el.experience}</div>
        <br>
        <div class="attribute-name">School:</div> <div class="attribute-value">${el.school}</div>
        <br>
        <div class="attribute-name">Major:</div> <div class="attribute-value">${el.major}</div>
        <br>
        <div class="attribute-name">Email:</div> <div class="attribute-value">${el.email}</div>
        <br>
        <div class="attribute-name">Coding Languages:</div> <div class="attribute-value">${el.codeLanguages}</div>
        <br>
        <img class="logo" src="/img/linkedin.svg"></img>
        <div class="linkedin-link">${el.linkedInUrl}</div>
    </div>
`
        // add each created ID card to the template-hook element
        templateElement.append(newID);
    })
}



