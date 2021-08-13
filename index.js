const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})


const button = document.getElementById("btn")
const nav = document.getElementsByClassName("navbar")
const timeline = new TimelineMax({ delay: 0.2 });

window.onload = () => {
  timeline.fromTo(nav, 0.5, { y: -50, opacity: 0 }, { y: 0, opacity: 1 });
  timeline.fromTo(button, 0.5, { opacity: 0 }, { opacity: 1 });
}
