import { createNavbar } from './components/navbar.js';
import { createAbout } from './components/about.js';
import { createPartners } from './components/partners.js';
import { createVenue } from './components/venue.js';
import { createSpeakers } from './components/speakers.js';
import { createSchedule } from './components/schedule.js';
import { createFAQ } from './components/faq.js';
import { createRegister, initCountdown } from './components/register.js';
import { createFooter } from './components/footer.js';
import { CONFIG } from './config.js';

// 1. Render all components into their placeholders
const renderSite = () => {
    document.getElementById('navbar-container').innerHTML = createNavbar('Home');
    document.getElementById('about-container').innerHTML = createAbout();
    document.getElementById('partners-container').innerHTML = createPartners();
    document.getElementById('venue-container').innerHTML = createVenue();
    document.getElementById('speakers-container').innerHTML = createSpeakers();
    document.getElementById('schedule-container').innerHTML = createSchedule();
    document.getElementById('faq-container').innerHTML = createFAQ();
    document.getElementById('register-container').innerHTML = createRegister();
    document.getElementById('footer-container').innerHTML = createFooter();

    // 2. Initialize UI Logic after rendering
    initCountdown();
};

// 3. Global Window Functions for Interactivity
// These must be attached to the window object to be accessible from HTML onclick attributes
window.toggleDay = function(dayId) {
    const content = document.getElementById(`content-${dayId}`);
    const icon = document.querySelector(`#icon-${dayId} svg`);
    
    content.classList.toggle('hidden');
    if (content.classList.contains('hidden')) {
        icon.style.transform = 'rotate(0deg)';
    } else {
        icon.style.transform = 'rotate(180deg)';
    }
};

window.toggleFAQ = function(id) {
    const content = document.getElementById(`faq-content-${id}`);
    const icon = document.querySelector(`#faq-icon-${id} svg`);
    
    content.classList.toggle('hidden');
    if (content.classList.contains('hidden')) {
        icon.style.transform = 'rotate(0deg)';
    } else {
        icon.style.transform = 'rotate(180deg)';
    }
};

// 4. Run the render on DOM load
document.addEventListener('DOMContentLoaded', renderSite);