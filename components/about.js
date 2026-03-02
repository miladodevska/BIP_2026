    import { CONFIG } from '../config.js';
export function createAbout() {
    const about = CONFIG.EVENT;
    return `
    <section id="about" class="py-24 bg-white relative overflow-hidden">
        <div class="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
        
        <div class="max-w-7xl mx-auto px-6 relative z-10">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
                
                <div>
                    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold tracking-widest uppercase mb-6 border border-blue-100">
                        The Mission
                    </div>
                    <h2 class="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                        Bridging the gap between <span class="text-blue-600">Research</span> and <span class="text-blue-600">Real-world Defense</span>
                    </h2>
                    <div class="space-y-4 text-slate-600 leading-relaxed">
                        <p>
                            The <strong>Cyber-future</strong> course is a Blended Intensive Programme (BIP) that combines 
                            virtual collaboration with five days of high-impact physical mobility in Skopje.
                        </p>
                        <p>
                            Hosted by the <strong>${about.HOST}</strong>, ${about.UNIVERSITY}, 
                            this initiative transforms state-of-the-art cybersecurity research into actionable, 
                            future-proof training for the next generation of experts.
                        </p>
                    </div>

                    <div class="grid grid-cols-2 gap-8 mt-10">
                        <div>
                            <div class="text-3xl font-bold text-slate-900">Online</div>
                            <div class="text-sm text-slate-500 font-medium">Synchronous Lectures</div>
                        </div>
                        <div>
                            <div class="text-3xl font-bold text-slate-900">5 Days</div>
                            <div class="text-sm text-slate-500 font-medium">Intensive On-site</div>
                        </div>
                    </div>
                </div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="md:col-span-2 p-8 bg-blue-500 rounded-3xl border border-blue-100 flex flex-row items-start gap-6 hover:border-blue-300 transition-colors group">
        <div class="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0 group-hover:scale-110 transition-transform">
           
        <a href="#schedule"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.642.316a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.823.362l-1.44 1.2a2 2 0 00-.51 2.947l.564.846A2 2 0 004.389 21h15.222a2 2 0 001.538-3.282l-.721-.871z" />
            </svg></a>
        </div>
        <div>
            <h3 class="text-lg font-bold mb-2 text-blue-50">Be a part of our <span class="uppercase text-white">Masterclass</span></h3>
            <p class="text-sm text-blue-200 leading-relaxed">A 4 day intensive on-site workshop in Skopje, with hands-on training and expert-led sessions.</p>
        </div>
    </div>

    <div class="md:col-span-2 p-8 bg-blue-600 rounded-3xl border border-blue-500 flex flex-row items-start gap-6 hover:border-white/30 transition-colors group shadow-lg">
        <div class="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0 group-hover:rotate-12 transition-transform">
            <a href="#schedule"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg></a>
        </div>
        <div>
            <h4 class="text-xl font-bold mb-1 text-white">Join the <span class="font-bold">CHALLENGE</span></h4>
            <p class="text-sm text-blue-200">Be a part of the <span class="font-bold">challenge</span> to enhance your cybersecurity skills, at the end of your training!</p>
            <a href="#schedule" class="inline-block mt-4 text-white font-bold border-b border-white/40 hover:border-white transition-all">More info in the schedule</a>
        </div>
    </div>
</div>

                </div>
            </div>
        </div>
    </section>
    `;
}
