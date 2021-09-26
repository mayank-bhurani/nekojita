if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("../serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }
  


//  nav links scripts

function arigato(){
    document.body.innerHTML = `<div class="arigato"><p>dedicated to my friends <a href="https://www.instagram.com/cezanne_a/">Cezanne Ali</a>,<a href="https://www.linkedin.com/in/nareshnathnnk"> Naresh Nath</a> and <a href="https://www.linkedin.com/in/suraj-vaishnav">Suraj Vaishnav</a>. and to my sisters. and to all the beautiful people that are like landscapes in my life. you know who you are.</p></div>`;
}

const arrowBtn = document.getElementById('arrowBtn');

const navLinks = document.getElementById('nav-links-1');

if (window.innerWidth < 768){
    navLinks.setAttribute('class', 'd-none');
    arrowBtn.setAttribute('class', 'menu-closed');
}

function navVis(){
    if(arrowBtn.classList.contains('menu-open')){
        navLinks.setAttribute('class', 'nav-links-fade-out');
        setTimeout(() => {navLinks.classList.add('d-none')}, 500);
        arrowBtn.setAttribute('class', 'menu-closed');
    } else if (arrowBtn.classList.contains('menu-closed')){
        navLinks.setAttribute('class', 'nav-links-fade-in');
        arrowBtn.setAttribute('class', 'menu-open');
    }
}

arrowBtn.addEventListener('click', navVis);


// theme changer scripts

const themeBtn = document.getElementById('themeBtn');

const rootEl = document.querySelector(':root');

const rootElVal = getComputedStyle(rootEl);

const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

function themeDark(){
    rootEl.style.setProperty('--bg-one', '#000000');
    rootEl.style.setProperty('--bg-two', '#1a1a1a');
    rootEl.style.setProperty('--bg-three', '#333333');
    rootEl.style.setProperty('--fg-one', '#ffffff');
    rootEl.style.setProperty('--fg-two', '#f9f9f9');
    rootEl.style.setProperty('--fg-three', '#e6e6e6');
    arrowBtn.setAttribute('src', 'assets/vectors/arrow-light.svg')
    themeBtn.setAttribute('class', 'dark');
    themeBtn.innerText = `lumos`;
    localStorage.setItem('theme', 'dark');
}

function themeLight(){
    rootEl.style.setProperty('--bg-one', '#ffffff');
    rootEl.style.setProperty('--bg-two', '#f9f9f9');
    rootEl.style.setProperty('--bg-three', '#e6e6e6');
    rootEl.style.setProperty('--fg-one', '#000000');
    rootEl.style.setProperty('--fg-two', '#1a1a1a');
    rootEl.style.setProperty('--fg-three', '#333333');
    arrowBtn.setAttribute('src', 'assets/vectors/arrow-dark.svg')
    themeBtn.setAttribute('class', 'light');
    themeBtn.innerText = `nox`;
    localStorage.setItem('theme', 'light');
}

if (localStorage.getItem('theme') === null){
    defaultTheme();
} else if (localStorage.getItem('theme') === 'dark'){
    themeDark();
} else if (localStorage.getItem('theme') === 'light'){
    themeLight();
}

function defaultTheme(){
    if (darkThemeMq.matches){
        themeDark();
    }else{
        themeLight();
    }
}


function themeChanger(){
    if(themeBtn.classList.contains('light')){
        themeDark()
    } else{
        themeLight()
    }
}


themeBtn.addEventListener('click', themeChanger);


// theme changer scripts end






