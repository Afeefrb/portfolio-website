  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBN29hUHndnTuLrA26vI-amDwmBXGDjT_4",
    authDomain: "personal-contact-form.firebaseapp.com",
    databaseURL: "https://personal-contact-form.firebaseio.com",
    projectId: "personal-contact-form",
    storageBucket: "personal-contact-form.appspot.com",
    messagingSenderId: "766625118723",
    appId: "1:766625118723:web:6a5df007f5d45edf17ac36",
    measurementId: "G-YLCQ0XJT1D"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Firebase Collections Reference for Contact form

  var messagesRef = firebase.database().ref("messages");

  //Form Event Listenrs
document.getElementById("contactForm").addEventListener("submit", submitForm);
//submit form
function submitForm(e) {
    e.preventDefault();

    //Get Values
    var name = getInputValues("name");
    var email = getInputValues("email");
    var project = getInputValues("project");
    var message = getInputValues("message");


    //Save Message
    saveMessage(name,email,project,message);
    
    
     // Show alert
        document.querySelector('.alert').style.display = 'block';

        // Hide alert after 3 seconds
        setTimeout(function(){
            document.querySelector('.alert').style.display = 'none';
        },3000);

        // Clear form
        document.getElementById('contactForm').reset();


    
}

//Function to get input form values
function getInputValues(id){
    return document.getElementById(id).value;
}

//Clear inputs after suvmission
// function clearInputs(name,email,project,message){

//    document.getElementById("name").value = "";
//    document.getElementById("email").value = "";
//    document.getElementById("project").value = "";
//    document.getElementById("message").value = "";

//   }

//Function to save messages to firebase
function saveMessage(name, email, project, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name,
        email,
        project,
        message
    })
}

/*================================**************================================*/
/*================================**************================================*/
/*================================**************================================*/


/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById("nav-menu"),
    toggleMenu = document.getElementById("nav-toggle"),
    closeMenu = document.getElementById("nav-close")



// SHOW
toggleMenu.addEventListener("click", () => {
    navMenu.classList.toggle("show");
})


// HIDDEN
closeMenu.addEventListener("click", () => {
    navMenu.classList.remove("show");
})


/*===== ACTIVE AND REMOVE MENU =====*/
const navLinks = document.querySelectorAll(".nav__link");

function linkAction(){
    navMenu.classList.remove("show");
}

navLinks.forEach(n => n.addEventListener("click", linkAction));


/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", scrollActive);

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
        const sectionHt = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;


        sectionId = section.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHt){
            document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active");
        } else {
            document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active");
        }
    })
}


