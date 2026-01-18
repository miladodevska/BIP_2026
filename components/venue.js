import { CONFIG } from '../config.js';
export function createVenue() {
    return `
    <section id="venue" class="py-24 bg-white relative">
<div class="max-w-7xl mx-auto px-6">
        
        <div class="mb-16">
            <h2 class="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">Venue & Logistics</h2>
            <h3 class="text-4xl font-extrabold text-slate-900 leading-tight">
                How to <span class="text-blue-600">get there</span>
            </h3>
        </div>

        <div class="grid lg:grid-cols-2 gap-12 items-start">
            
            <div class="space-y-6">
                <div class="p-8 bg-slate-50 rounded-3xl border border-slate-100 group hover:border-blue-200 transition-all">
                    <div class="flex items-center gap-4 mb-4">
                        <div class="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-100">
                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                        </div>
                        <h4 class="text-xl font-bold text-slate-900">Address</h4>
                    </div>
                    <p class="text-slate-600 leading-relaxed font-medium">
                        ${CONFIG.EVENT.ADDRESS}
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                        <div class="flex items-center gap-3 mb-3">
                            <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>
                            <span class="font-bold text-slate-900 uppercase text-xs tracking-wider">By Bus</span>
                        </div>
                        <p class="text-sm text-slate-600 leading-relaxed">
                            Lines <strong>2, 4, 7, 15, and 22</strong> stop at the <strong>"Hotel Karposh"</strong> station.
                        </p>
                    </div>

                    <div class="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                        <div class="flex items-center gap-3 mb-3">
                            <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/></svg>
                            <span class="font-bold text-slate-900 uppercase text-xs tracking-wider">Parking</span>
                        </div>
                        <p class="text-sm text-slate-600 leading-relaxed">
                            <strong>Free parking</strong> is available behind the technical campus buildings.
                        </p>
                    </div>
                </div>

                <a href="https://map.finki.ukim.mk/" target="_blank" class="flex items-center justify-between p-6 bg-blue-600 rounded-2xl text-white group hover:bg-blue-700 transition-all shadow-xl shadow-blue-100">
                    <div>
                        <h5 class="font-bold">Navigate Campus</h5>
                        <p class="text-xs text-blue-100">Open interactive directions</p>
                    </div>
                    <svg class="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </a>
            </div>

           <div class="relative group h-[400px] lg:h-[500px]">
                <div class="absolute -inset-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2.5rem] blur-xl opacity-10 group-hover:opacity-15 transition-opacity"></div>
                <div class="relative h-full w-full bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-2xl">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.863517117456!2d21.406972976753377!3d42.004118171228164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13541443605aa4ab%3A0x33d56647e5b87264!2sFaculty%20of%20Computer%20Science%20%26%20Engineering!5e1!3m2!1sen!2smk!4v1768676499049!5m2!1sen!2smk" 
                        class="absolute inset-0 w-full h-full grayscale-[0.2] contrast-[1.1]"
                        style="border:0;" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>

        </div>
    </div>
    </section>
    `;
}