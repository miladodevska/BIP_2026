import { CONFIG } from '../config.js';
export function createRegister() {
    return `
    <section id="register" class="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
        <div class="max-w-4xl mx-auto px-6 relative z-10">
            <div class="text-center mb-16">
                <h2 class="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">Register</h2>
                <h3 class="text-4xl font-extrabold text-slate-900 leading-tight">
                    Secure your <span class="text-blue-600">Admission</span>
                </h3>
            </div>

            <div class="flex flex-col items-center gap-16">
                
                <div class="w-full relative group">
                    <div class="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    
                    <div class="relative flex flex-col md:flex-row bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-xl shadow-blue-50/50">
                        
                        <div class="flex-grow p-8 sm:p-10 relative">
                            <div class="flex items-center gap-3 mb-6">
                                <div class="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                                    </svg>
                                </div>
                                <span class="text-xs font-bold text-blue-600 uppercase tracking-widest">Official Entry Pass</span>
                            </div>
                            
                            <h4 class="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6 leading-none">${CONFIG.EVENT.EDITION} ADMISSION</h4>
                            
                            <div class="mb-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 flex gap-6 items-center">
                                <div class="flex flex-col">
                                    <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Starts In</span>
                                    <div class="flex gap-4 mono text-blue-600 font-bold text-xl">
                                        <div class="flex flex-col items-center"><span id="days">00</span><span class="text-[9px] text-slate-400 uppercase">Days</span></div>
                                        <span class="text-slate-300">:</span>
                                        <div class="flex flex-col items-center"><span id="hours">00</span><span class="text-[9px] text-slate-400 uppercase">Hrs</span></div>
                                        <span class="text-slate-300">:</span>
                                        <div class="flex flex-col items-center"><span id="minutes">00</span><span class="text-[9px] text-slate-400 uppercase">Min</span></div>
                                        <span class="text-slate-300">:</span>
                                        <div class="flex flex-col items-center"><span id="seconds">00</span><span class="text-[9px] text-slate-400 uppercase">Sec</span></div>
                                    </div>
                                </div>
                            </div>

                            <div class="grid grid-cols-2 gap-6 pt-3 border-t border-slate-100">
                                <div>
                                    <span class="block text-xs font-medium text-slate-400 uppercase mb-1">Date</span>
                                    <span class="font-bold text-slate-900 text-lg">${CONFIG.EVENT.FULL_DATE}</span>
                                </div>
                                <div>
                                    <span class="block text-xs font-medium text-slate-400 uppercase mb-1">Host</span>
                                    <span class="font-bold text-slate-900 text-lg">${CONFIG.EVENT.LOCATION_NAME}</span>
                                </div>
                            </div>
                            <div class="hidden md:block absolute right-0 top-10 bottom-10 w-px bg-slate-100"></div>
                        </div>

                        <div class="md:w-64 bg-blue-600 p-8 flex flex-col items-center justify-center text-center text-white relative overflow-hidden">
                            <div class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-blue-600 to-blue-600"></div>
                            <span class="text-xs font-bold text-blue-100 uppercase tracking-widest mb-2 relative">Price</span>
                            <span class="text-3xl font-extrabold leading-none mb-6 relative">Free of<br>Charge</span>
                            <button class="relative w-full py-3.5 bg-white text-blue-600 font-bold uppercase text-xs tracking-widest rounded-xl hover:bg-blue-50 transition-all shadow-sm">
                                Claim Pass Below
                            </button>
                            <p class="text-xs text-blue-100 mt-4 relative">by registering in the <br>form below.</p>
                        </div>
                    </div>
                </div>

                <div class="w-full relative h-[850px] bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-sm">
                    <div class="absolute inset-0 flex flex-col">
                        <div class="bg-slate-50 px-6 py-4 border-b border-slate-100 flex items-center gap-3">
                            <div class="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
                            <span class="font-bold text-slate-700 uppercase tracking-wider text-xs">Registration Form</span>
                        </div>
                        <iframe 
                            src="https://docs.google.com/forms/d/e/1FAIpQLScWLrR0BLMWe7JjS2tgGt9AojVFdvPlOcw2WaNwAkSG5mOy0Q/viewform?embedded=true" 
                            class="w-full h-full bg-white" 
                            frameborder="0" 
                            marginheight="0" 
                            marginwidth="0">
                            Loading…
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
}

export function initCountdown() {
    const countdownDate = new Date(CONFIG.EVENT.START_DATE_ISO).getTime();

    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (document.getElementById("days")) {
            document.getElementById("days").innerText = days.toString().padStart(2, '0');
            document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
            document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
            document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
        }

        if (distance < 0) {
            clearInterval(x);
            // Handle expired state if needed
        }
    }, 1000);
}