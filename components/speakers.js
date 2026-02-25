import { CONFIG } from '../config.js';
const safeExternalHref = (href) => {
    const s = String(href || "").trim();
    if (s.startsWith("https://") || s.startsWith("http://")) return s;
    return "#";
};
export function createSpeakers() {
    const speakers = CONFIG.SPEAKERS;
    return `
<section id="speakers" class="py-24 bg-slate-50/50 relative overflow-hidden">
    <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl"></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-12">
            <h2 class="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">Speakers</h2>
            <h3 class="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                Learn from <span class="text-blue-600">Cybersecurity Researchers</span>
            </h3>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
            ${speakers.map(speaker => `
                <div class="group bg-white p-1.5 rounded-[2.5rem] md:rounded-[3.5rem] border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

                    <!-- Image wrapper: position relative so badge is anchored to it -->
                    <div class="relative mb-6">

                        <!-- Image container: overflow-hidden only here to clip image/gradient -->
                        <div class="aspect-square w-full bg-slate-100 rounded-[2rem] overflow-hidden">
                            <img src="${speaker.image}" alt="${speaker.name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
                            <div class="absolute inset-0 bg-gradient-to-t from-blue-600/60 via-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>                    
                        </div>
                    </div>

                    <div class="px-6 pb-8">
                        <span class="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-2 block">${speaker.role} | ${speaker.date}</span>
                        <h4 class="text-xl font-extrabold text-slate-900 mb-1">${speaker.name}</h4>
                        <p class="text-sm font-semibold text-slate-400 mb-4">${speaker.institution}</p>
                        <p class="text-sm text-slate-500 leading-relaxed">${speaker.title || "TBA"}</p>
                    </div>

                </div>
            `).join('')}
        </div>
    </div>
</section>
    `;
}
