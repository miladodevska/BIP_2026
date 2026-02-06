import { createNavbar } from './components/navbar.js';
import { createAbout } from './components/about.js';
import { createPartners } from './components/partners.js';
import { createVenue } from './components/venue.js';
import { createSpeakers } from './components/speakers.js';
import { createSchedule } from './components/schedule.js';
import { createFAQ } from './components/faq.js';
import { createRegister, initCountdown } from './components/register.js';
import { createFooter } from './components/footer.js';

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

const attachHandlers = () => {
    document.addEventListener("click", (e) => {
        const faqBtn = e.target.closest("[data-faq-toggle]");
        if (faqBtn) {
            const id = faqBtn.getAttribute("data-faq-toggle");
            const content = document.getElementById(`faq-content-${id}`);
            const icon = document.querySelector(`#faq-icon-${id} svg`);
            if (!content || !icon) return;

            content.classList.toggle("hidden");
            icon.style.transform = content.classList.contains("hidden")
                ? "rotate(0deg)"
                : "rotate(180deg)";
            return;
        }

        const dayBtn = e.target.closest("[data-day-toggle]");
        if (dayBtn) {
            const dayId = dayBtn.getAttribute("data-day-toggle");
            const content = document.getElementById(`content-${dayId}`);
            const icon = document.querySelector(`#icon-${dayId} svg`);
            if (!content || !icon) return;

            content.classList.toggle("hidden");
            icon.style.transform = content.classList.contains("hidden")
                ? "rotate(0deg)"
                : "rotate(180deg)";
        }
    });
};

// 4. Run the render on DOM load
document.addEventListener("DOMContentLoaded", () => {
    renderSite();
    attachHandlers();
});