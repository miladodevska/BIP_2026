import { CONFIG } from '../config.js';
const safeHref = (href) => {
    const s = String(href).trim();
    if (s.startsWith("#") || s.startsWith("/") || s.startsWith("./")) return s;
    return "#";
};
export function createFooter() {
    const navItems = CONFIG.NAV_ITEMS;
    return `
    <footer id="footer" class="bg-white border-t border-slate-200 pt-20 pb-10">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
                
                <div class="lg:col-span-1">
                    <div class="flex items-center gap-3 mb-6">
                        <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-md shadow-blue-100">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <span class="font-extrabold text-xl tracking-tight text-slate-900">${CONFIG.EVENT.EDITION}</span>
                    </div>
                    <p class="text-slate-500 text-sm leading-relaxed mb-6">
                        Turning state-of-the-art research results into the future of cybersecurity training. A Blended Intensive Programme designed for the next generation of security experts.
                    </p>
                    
                    <div class="flex gap-4">
                        <a href="#" rel="noopener noreferrer" class="text-slate-400 hover:text-blue-600 transition-colors" aria-label="LinkedIn">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </a>
                        <a href="#" rel="noopener noreferrer" class="text-slate-400 hover:text-blue-600 transition-colors" aria-label="Facebook">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-8.74h-2.94v-3.41h2.94v-2.52c0-2.91 1.777-4.495 4.375-4.495 1.243 0 2.313.093 2.624.135v3.042h-1.799c-1.412 0-1.685.671-1.685 1.655v2.167h3.367l-.439 3.41h-2.928v8.741h6.1c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                        </a>
                        <a href="#" rel="noopener noreferrer" class="text-slate-400 hover:text-blue-600 transition-colors" aria-label="Instagram">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        </a>
                    </div>
                </div>

                <div class="lg:flex lg:flex-col lg:items-center">
                    <div class="w-fit">
                        <h4 class="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest lg:text-center">Site Map</h4>
                        <ul class="space-y-4 text-sm font-medium text-slate-500 lg:text-center">
                        ${navItems.map(item => `<li><a href="${safeHref(item.href)}" rel="noopener noreferrer" class="hover:text-blue-600 transition-colors">${item.name}</a></li>`).join('')}
                        </ul>
                    </div>
                </div>

                <div>    
                    <h4 class="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Contact Information</h4>    
                    <div class="space-y-4 text-sm text-slate-500 leading-relaxed">        
                        <p class="flex items-start gap-3">            
                            <svg class="w-5 h-5 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                            Rugjer Boshkovikj 16,<br>Skopje 1000, North Macedonia
                        </p>               
                        <p class="flex items-center gap-3">            
                            <svg class="w-5 h-5 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                            ${CONFIG.CONTACT.EMAIL}
                        </p>        
                        <p class="flex items-center gap-3">            
                            <svg class="w-5 h-5 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                            ${CONFIG.CONTACT.HOURS}
                        </p>    
                    </div>
                </div>        
            </div>

            <div class="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                <p class="text-[11px] font-bold text-slate-400 uppercase tracking-widest text-center md:text-left">
                    © 2026 ${CONFIG.EVENT.HOST}, ${CONFIG.EVENT.UNIVERSITY}.
                </p>
            </div>
        </div>
    </footer>
    `;
}