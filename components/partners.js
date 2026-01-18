import { CONFIG } from "../config.js";
export function createPartners() {
    const partners = CONFIG.PARTNERS;
    // const partners = [
    //     {
    //         name: "Faculty of Computer Science and Engineering",
    //         logo: "/images/partners/finki.png",
    //         alt: "FCSE FINKI Logo",
    //         link: "https://finki.ukim.mk"
    //     },
    //     {
    //         name: "Ss. Cyril and Methodius University",
    //         logo: "/images/partners/ukim logo.png",
    //         alt: "UKIM Logo",
    //         link: "https://ukim.edu.mk"
    //     },
    //     {
    //         name: "BIP Programme",
    //         logo: "/images/partners/erasmus.png",
    //         alt: "Erasmus+ Logo",
    //         link: "https://erasmusbip.org/"
    //     },
    //     {
    //         name: "Kadir Has University",
    //         logo: "/images/partners/kadir has.png",
    //         alt: "Kadir Has University Logo",
    //         link: "https://www.khas.edu.tr/en/"
    //     },
    //     {
    //         name: "SRH University",
    //         logo: "/images/partners/srh.png",
    //         alt: "SRH University Logo",
    //         link: "https://www.srh-university.de/en/"
    //     }
    // ];

    return `
    <section id="partners" class="py-24 bg-slate-50/50 border-y border-slate-200/60">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">In Collaboration With</h2>
                <div class="h-1.5 w-10 bg-blue-600 mx-auto rounded-full"></div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 items-center">
                ${partners.map(partner => `
                    <a href="${partner.link}" target="_blank" class="flex flex-col items-center group transition-all duration-300">
                        <div class="h-16 w-full flex items-center justify-center opacity-50 group-hover:opacity-100 transition-all px-4">
                            <img src="${partner.logo}" alt="${partner.alt}" class="h-full w-auto object-contain">
                        </div>
                        <span class="text-[10px] font-bold text-slate-400 group-hover:text-blue-700 uppercase text-center mt-4 px-2 leading-tight">
                            ${partner.name}
                        </span>
                    </a>
                `).join('')}
            </div>

            <p class="text-center text-[11px] text-slate-400 mt-16 font-medium tracking-wide">
                Transforming research into practice through international collaboration.
            </p>
        </div>
    </section>
    `;
}