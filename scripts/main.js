// =================================================================
// VARIABLE INITIATION
// =================================================================




// =================================================================
// ANIM ARRIVEE SITE
// =================================================================

gsap.from("#linkMenu", { y: 300 , duration: 1});
gsap.from("#bioContainer", { opacity: 0, x: 300 , duration: 1});
gsap.from("#experienceContainer", {opacity: 0, x: 300 , duration: 1, delay: .2});
gsap.from("#headProfile", {opacity: 0, x: -300 , duration: 1, delay: 1});


// =================================================================
// DEVELOPPEUR XXX
// =================================================================

let choices = ["Front-End", "Back-End", "JavaScript", "Symfony", "Java", "Python", "NodeJS", "passionné"]

// create a reusable effect that swaps text
gsap.registerEffect({
    name: "swapText",
    effect: (targets, config) => {
      let tl = gsap.timeline({delay: config.delay});
      tl.to(targets, {opacity: 0, duration: config.duration / 2});
      tl.add(() => targets[0].innerText = config.text);
      tl.to(targets, {opacity: 1, duration: config.duration});
      return tl;
    },
    defaults: {duration: 1}, 
    extendTimeline: true
});

let jobDelay = 1

var tl = gsap.timeline({repeat: -1}); // Timeline répétable à l'infinie
for (let i = 0; i < choices.length; i ++){
    tl.swapText(".jobText", {text: choices[i], delay: jobDelay})
}
    

// =================================================================
// MENU DEROULANT GAUCHE
// =================================================================

let leftMenuState = true;
let timelineLeftMenu = gsap.timeline();
document.getElementById("leftMenuBtn").addEventListener("click", e => {
    if(!timelineLeftMenu.isActive()){
        leftMenuState = !leftMenuState;
        if(leftMenuState){
                timelineLeftMenu.to("#leftMenuBtn", {rotation: "0deg", duration: .2})
                var audio = new Audio('/res/audio/menuOpen.wav');
                audio.play()
                audio.volume = 0.4;
                timelineLeftMenu.to("#mainContainer", {x: 0, duration: .5});
                timelineLeftMenu.to("#linkMenu", { x: 0 , duration: .5});

        }else{
                var audio = new Audio('/res/audio/menuOpen.wav');
                audio.play()
                audio.volume = 0.4;
                timelineLeftMenu.to("#leftMenuBtn", {rotation: "90deg", duration: .2});
                timelineLeftMenu.to("#linkMenu", { x: -50 , duration: .5});
                timelineLeftMenu.to("#mainContainer", {x:-20, duration: 1});
            

        }
    }    

})

// =================================================================
// LIGHT SELECTION
// =================================================================

let light = true;
document.getElementById("lightSelection").addEventListener("click", e => {
    
    light = !light;
    if(light){
        var audio = new Audio('/res/audio/lightOn.mp3');
        audio.volume = 0.4;
        audio.play();
        document.getElementsByTagName("body")[0].style.color = "black";
        document.getElementsByTagName("body")[0].style.backgroundColor = "white";
        
        document.getElementById("lightIcon").name = "moon-outline"
        let linkList = document.getElementsByTagName("a");
        for (let i = 0; i < linkList.length; i++) {
            
            linkList[i].style.color = "black";
            
        }
        
    }else{
        var audio = new Audio('/res/audio/lightOn.mp3');
        audio.volume = 0.4;
        audio.play();
        document.getElementById("lightIcon").name = "sunny-outline"
        document.getElementsByTagName("body")[0].style.color = "white";
        document.getElementsByTagName("body")[0].style.backgroundColor = "black";
        
        let linkList = document.getElementsByTagName("a");
        for (let i = 0; i < linkList.length; i++) {

            linkList[i].style.color = "white";

        }
    }

})


// =================================================================
// MAGIC CIRCLE
// =================================================================

const circleColor = "#5F9EA0"

let circle = document.getElementById('magicCircle');
circle.style.backgroundColor = circleColor
document.addEventListener('mousemove', function(e) {

    if (circle.style.display == "none"){
        circle.style.display = "inline"
    }
    let left = e.clientX;
    let top = e.clientY;
    circle.style.left = left + 'px';
    circle.style.top = (top + window.scrollY) + 'px';
});

let linkList = document.getElementsByTagName("a")
let buttonList = document.getElementsByTagName("button")

for (let i = 0; i < linkList.length; i++) {
    linkList[i].addEventListener('mouseenter', e => {
        gsap.to(circle, {backgroundColor: "purple", duration:.4})
        gsap.to(circle, {width: 60, height:60, duration:.4})
        var audio = new Audio('/res/audio/etherealTransition.wav');
        audio.playbackRate = 3;
        audio.volume = 0.07;
        audio.play()
    });
    linkList[i].addEventListener('mouseleave', e => {
        gsap.to(circle, {backgroundColor: circleColor, duration:.4})
        gsap.to(circle, {width: 15, height:15, duration:.4})
    });
}
for (let i = 0; i < buttonList.length; i++) {
    buttonList[i].addEventListener('mouseenter', e => {
        gsap.to(circle, {backgroundColor: "purple", duration:.4})
        gsap.to(circle, {width: 60, height:60, duration:.4})
        var audio = new Audio('/res/audio/etherealTransition.wav');
        audio.playbackRate = 3;
        audio.volume = 0.07;
        audio.play()
    });
    buttonList[i].addEventListener('mouseleave', e => {
        gsap.to(circle, {backgroundColor: circleColor, duration:.4})
        gsap.to(circle, {width: 15, height:15, duration:.4})
        
    });
}

// ==============================
// Categories Déroulantes
// ==============================

let bioOn = true
document.getElementById("bioPlus").addEventListener("click", e => {
    
    let bio = document.getElementById("bioContainer")
    if(bioOn){
        bio.classList.add("hiddenCategory");
        document.getElementById("bioPlus").innerText = "+"
        bio.style.border = "0px";
        bio.style.padding = 0;
        bioOn = !bioOn;
    }else{
        bio.classList.remove("hiddenCategory");
        document.getElementById("bioPlus").innerText = "-"
        bio.style.border = "1px solid #5F9EA0";
        bio.style.padding = "20px"
        bioOn = !bioOn;
    }

})
let formationOn = true
document.getElementById("formationPlus").addEventListener("click", e => {
    
    let formation = document.getElementById("formationContainer")
    if(formationOn){
        formation.classList.add("hiddenCategory");
        // gsap.to("#formationContainer", {height: "0px", duration:"1s"})
        document.getElementById("formationPlus").innerText = "+"
        formationOn = !formationOn;
    }else{
        formation.classList.remove("hiddenCategory");
        // gsap.from("#formationContainer", {height: "0px", duration:"1s"})
        document.getElementById("formationPlus").innerText = "-"
        formationOn = !formationOn;
    }

})

let experienceOn = true
document.getElementById("experiencePlus").addEventListener("click", e => {
    
    let experience = document.getElementById("experienceContainer")
    if(experienceOn){
        experience.classList.add("hiddenCategory");
        document.getElementById("experiencePlus").innerText = "+"
        experienceOn = !experienceOn;
    }else{
        experience.classList.remove("hiddenCategory");
        document.getElementById("experiencePlus").innerText = "-"
        experienceOn = !experienceOn;
    }

})
