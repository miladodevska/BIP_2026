import { CONFIG } from '../config.js';
export function createSpeakers() {
    const speakers = CONFIG.SPEAKERS;
    return `
    <section id="speakers" class="py-24 bg-slate-50/50 relative overflow-hidden">
        <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl"></div>

        <div class="max-w-7xl mx-auto px-6 relative z-10">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <h2 class="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">Speakers</h2>
                <h3 class="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                    Learn from <span class="text-blue-600">Cybersecurity Researchers</span>
                </h3>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${speakers.map(speaker => `
                    <div class="group bg-white p-2 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                        <div class="aspect-square w-full bg-slate-100 rounded-[2rem] overflow-hidden mb-6 relative">
                            <img src="${speaker.image}" alt="${speaker.name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
                            <div class="absolute inset-0 bg-gradient-to-t from-blue-600/60 via-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div class="px-6 pb-8">
                            <span class="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-2 block">${speaker.role}</span>
                            <h4 class="text-xl font-extrabold text-slate-900 mb-1">${speaker.name}</h4>
                            <p class="text-sm font-semibold text-slate-400 mb-4">${speaker.institution}</p>
                            <p class="text-sm text-slate-500 leading-relaxed">${speaker.bio}</p>
                            <div class="mt-6 flex gap-3">
                                <a href="${speaker.linkedin}" class="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-colors">
                                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>
    `;
}