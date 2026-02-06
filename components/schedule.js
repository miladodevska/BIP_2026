import { CONFIG } from "../config.js";
export function createSchedule() {
    const days = CONFIG.SCHEDULE;
    return `
    <section id="schedule" class="py-24 bg-white relative">
        <div class="max-w-7xl mx-auto px-6 relative z-10">
            <div class="mb-16 text-center lg:text-left">
                <h2 class="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">Program Schedule</h2>
                <h3 class="text-4xl font-extrabold text-slate-900 leading-tight">
                    Cyber Everywhere <span class="text-blue-600">All at Once</span>
                </h3>
            </div>

            <div class="grid lg:grid-cols-3 gap-12">
                <div class="lg:col-span-1">
                    <div class="sticky top-32">
                        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold tracking-widest uppercase mb-6 border border-slate-200">
                            Phase 01: Online Component
                        </div>
                        <h4 class="text-2xl font-bold text-slate-900 mb-4">Research & Prep</h4>
                        <p class="text-slate-500 text-sm leading-relaxed mb-6">
                            Introduction to state-of-the-art research in cybersecurity, IoT, AI, and cryptology.
                        </p>
                        <ul class="space-y-4 mb-8">
                            <li class="flex items-center gap-3 text-sm font-medium text-slate-700">
                                <div class="w-1.5 h-1.5 rounded-full bg-blue-600"></div> Synchronous online lectures
                            </li>
                            <li class="flex items-center gap-3 text-sm font-medium text-slate-700">
                                <div class="w-1.5 h-1.5 rounded-full bg-blue-600"></div> Pre-reading & research tasks
                            </li>
                            <li class="flex items-center gap-3 text-sm font-medium text-slate-700">
                                <div class="w-1.5 h-1.5 rounded-full bg-blue-600"></div> Preparatory work for on-site scenarios
                            </li>
                        </ul>
                        <div class="p-4 bg-blue-50 rounded-2xl border border-blue-100 text-xs text-blue-700 italic leading-relaxed">
                            Participants arrive prepared to immediately begin intensive workshop modules.
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-2 space-y-4">
                    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold tracking-widest uppercase mb-6 border border-blue-100">
                        Phase 02: On-Site Workshop (Skopje)
                    </div>

                    ${days.map((day, index) => `
                        <div class="border border-slate-100 rounded-[2rem] overflow-hidden bg-slate-50 hover:border-blue-200 transition-all">
                            <button data-day-toggle="${day.id}" type="button" class="w-full text-left p-8 flex items-center justify-between group">
                                <div>
                                    <span class="text-xs font-bold text-blue-600 uppercase tracking-widest">Day ${index + 1}</span>
                                    <h5 class="text-xl font-bold text-slate-900">${day.title}</h5>
                                </div>
                                <div id="icon-${day.id}" class="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                                    <svg class="w-5 h-5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                                </div>
                            </button>
                            <div id="content-${day.id}" class="hidden px-8 pb-8 animate-fadeIn">
                                <div class="pt-4 border-t border-slate-200/60 space-y-4">
                                    ${day.sessions.map(session => `
                                        <div class="flex gap-4">
                                            <span class="mono text-blue-600 font-bold">${session.time}</span> 
                                            <p class="text-sm text-slate-600">${session.task}</p>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    `).join('')}

                    <div class="bg-blue-600 rounded-[2.5rem] p-8 text-white shadow-xl shadow-blue-100">
                        <span class="text-xs font-bold text-blue-200 uppercase tracking-widest mb-2 block">Day 5: Finale</span>
                        <h5 class="text-2xl font-bold mb-4">Additional BIP Activities & Certificates</h5>
                        <p class="text-blue-100 text-xs mb-6">Advanced research topics, industry lectures, and forming future teams.</p>
                        <div class="flex flex-wrap gap-2">
                            <span class="px-3 py-1 bg-blue-500 rounded-full text-[10px] font-bold uppercase tracking-wider border border-blue-400">Final Presentations</span>
                            <span class="px-3 py-1 bg-blue-500 rounded-full text-[10px] font-bold uppercase tracking-wider border border-blue-400">Certificates Awarded</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
}