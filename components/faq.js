import { CONFIG } from "../config.js";
export function createFAQ() {
    const questions = CONFIG.FAQ;
    return `
    <section id="faq" class="py-24 bg-slate-50/50 relative">
        <div class="max-w-4xl mx-auto px-6 relative z-10">
            
            <div class="text-center mb-16">
                <h2 class="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">Support</h2>
                <h3 class="text-4xl font-extrabold text-slate-900 leading-tight">
                    Frequently Asked <span class="text-blue-600">Questions</span>
                </h3>
            </div>

            <div class="space-y-4">
                ${questions.map(item => `
                    <div class="bg-white border border-slate-200 rounded-3xl overflow-hidden hover:border-blue-300 transition-colors">
                        <button data-faq-toggle="${item.id}" type="button" class="w-full text-left p-6 sm:p-8 flex items-center justify-between group">
                            <span class="font-bold text-slate-900 text-lg">${item.question}</span>
                            <div id="faq-icon-${item.id}" class="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                                <svg class="w-4 h-4 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                            </div>
                        </button>
                        <div id="faq-content-${item.id}" class="hidden px-8 pb-8 animate-fadeIn">
                            <p class="text-slate-600 leading-relaxed">${item.answer}</p>
                        </div>
                    </div>
                `).join('')}
            </div>

            <p class="text-center mt-12 text-slate-500 text-sm">
                Have more questions? <a href="#footer" class="text-blue-600 font-bold hover:underline">Contact the organizing team</a>
            </p>
        </div>
    </section>
    `;
}