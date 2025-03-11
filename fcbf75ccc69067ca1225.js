
import "./styles.css";
import { renderHome } from "./home.js";
import { renderMenu } from "./menu.js";
import { renderAboutUs } from "./aboutUs.js";
import { renderReservations } from './reservations.js';

// Grab the tab buttons
const navButtons = document.querySelectorAll('.nav-button');

// Check which button was clicked, run the appropriate render function
function handleTabClick(event) {
    const buttonText = event.target.textContent;

    navButtons.forEach(button =>
        button.classList.toggle('active', button === event.target)
    );

    switch(buttonText) {
        case 'Home':
            renderHome();
            break;
        case 'Menu':
            renderMenu();
            break;
        case 'About Us':
            renderAboutUs();
            break;
        case 'Reservations':
            renderReservations();
            break;
        default:
            alert('No module found for tab:', buttonText);
            break;
    }
}

// Add Event listener to each nav button
navButtons.forEach(button => {
    button.addEventListener("click", handleTabClick);
});

// Initial Page Load
navButtons[0].classList.add('active');
renderHome();

