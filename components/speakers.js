import { CONFIG } from "../config.js";
const safeExternalHref = (href) => {
  const s = String(href || "").trim();
  if (s.startsWith("https://") || s.startsWith("http://")) return s;
  return "#";
};

export function createSpeakers() {
  const onlineSpeakers = CONFIG.SPEAKERS.filter(s => s.role === "online");
  const onSiteSpeakers = CONFIG.SPEAKERS.filter(s => s.role === "on-site");

const renderCard = (speaker) => `
  <div class="group bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-row items-center gap-6 h-full">
      
    <div class="relative w-32 h-32 flex-shrink-0 bg-slate-100 rounded-2xl overflow-hidden shadow-inner">
        <img src="${speaker.image}" 
             alt="${speaker.name}" 
             class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        >
        <div class="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>

    <div class="flex flex-col justify-center flex-1 min-w-0">
        <span class="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1 block"> 
            ${speaker.role} | ${speaker.date} 
        </span>
        <h4 class="text-base md:text-lg font-extrabold text-slate-900 mb-0.5 leading-tight truncate"> 
            ${speaker.name} 
        </h4>
        <p class="text-xs font-semibold text-slate-400 mb-2 truncate"> 
            ${speaker.institution} 
        </p>
        <p class="text-xs text-slate-500 leading-relaxed line-clamp-3"> 
            ${speaker.title || "TBA"} 
        </p>
    </div>
  </div>
`;


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

        <div class="relative py-12 flex items-center">
          <div class="flex-grow border-t border-slate-200"></div>
          <span class="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-4 mt-4 mx-6 block">
              Online Speakers
          </span>
          <div class="flex-grow border-t border-slate-200"></div>
      </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-4">
            ${onlineSpeakers.map(renderCard).join("")}
        </div>
        
      <div class="relative py-12 flex items-center">
          <div class="flex-grow border-t border-slate-200"></div>
          <span class="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-2 mt-4 mx-6 block">
              On-site Speakers
          </span>
          <div class="flex-grow border-t border-slate-200"></div>
      </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-6">
            ${onSiteSpeakers.map(renderCard).join("")}
        </div>
    </div>
</section>
  `;
}