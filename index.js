const aboutBtn = document.querySelector('.about-button');
const skillsBtn = document.querySelector('.skills-button');
const projectsBtn = document.querySelector('.projects-button');

const about = document.querySelector('.about-container');
const skills = document.querySelector('.skills-container');
const projects = document.querySelector('.projects-wrapper');

aboutBtn.addEventListener('click', ()=>{
    about.classList.remove('invisible');
    skills.classList.add('invisible');
    projects.classList.add('invisible');
});

skillsBtn.addEventListener('click', ()=>{
    about.classList.add('invisible');
    skills.classList.remove('invisible');
    projects.classList.add('invisible');
});

projectsBtn.addEventListener('click', ()=>{
    about.classList.add('invisible');
    skills.classList.add('invisible');
    projects.classList.remove('invisible');
});