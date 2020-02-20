const aboutBtn = document.querySelector('.about-button');
const skillsBtn = document.querySelector('.skills-button');
const projectsBtn = document.querySelector('.projects-button');

const about = document.querySelector('.about-container');
const skills = document.querySelector('.skills-container');
const projects = document.querySelector('.projects-wrapper');

aboutBtn.addEventListener('click', ()=>{
    about.classList.toggle('invisible');
});

skillsBtn.addEventListener('click', ()=>{
    skills.classList.toggle('invisible');
});

projectsBtn.addEventListener('click', ()=>{
    projects.classList.toggle('invisible');
});