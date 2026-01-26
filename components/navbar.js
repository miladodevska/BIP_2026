import { CONFIG } from '../config.js';
const safeHref = (href) => {
    const s = String(href).trim();
    if (s.startsWith("#") || s.startsWith("/") || s.startsWith("./")) return s;
    return "#";
};
export function createNavbar(activeName = 'Home') {
    const navItems = CONFIG.NAV_ITEMS;
    return `
    <nav class="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-100">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                </div>
                <div class="flex flex-col leading-tight">
                    <span class="font-extrabold text-lg tracking-tight">${CONFIG.EVENT.EDITION}</span>
                    <span class="text-[10px] uppercase tracking-widest font-bold text-slate-400">${CONFIG.EVENT.NAME}</span>
                </div>
            </div>
            
            <div class="hidden lg:flex items-center gap-8 text-sm font-semibold">
                ${navItems.map(item => `
                    <a href="${safeHref(item.href)}" 
                       class="${item.name === activeName ? 'text-blue-600' : 'text-slate-500 hover:text-slate-900'} transition-colors">
                        ${item.name}
                    </a>
                `).join('')}
            </div>

            <a href="#register" rel="noopener noreferrer" class="bg-blue-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-md shadow-blue-100">
                Register
            </a>
        </div>
    </nav>
    `;
}