/* Brew & Bloom – script */

/* ---------- ICONS (inline SVG) ---------- */
const ICONS = {
  "arrow-right": "<path d=\"M5 12h14\"/><path d=\"m12 5 7 7-7 7\"/>",
  "badge-check": "<path d=\"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.78 4.78 4 4 0 0 1-6.74 0 4 4 0 0 1-4.78-4.78 4 4 0 0 1 0-6.74Z\"/><path d=\"m9 12 2 2 4-4\"/>",
  "bean": "<path d=\"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z\"/><path d=\"M5.341 10.62a4 4 0 1 0 5.279-5.28\"/>",
  "book-open": "<path d=\"M12 7v14\"/><path d=\"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z\"/>",
  "check": "<path d=\"M20 6 9 17l-5-5\"/>",
  "clock": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><polyline points=\"12 6 12 12 16 14\"/>",
  "coffee": "<path d=\"M10 2v2\"/><path d=\"M14 2v2\"/><path d=\"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1\"/><path d=\"M6 2v2\"/>",
  "cup-soda": "<path d=\"m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8\"/><path d=\"M5 8h14\"/><path d=\"M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0\"/><path d=\"m12 8 1-6h2\"/>",
  "facebook": "<path d=\"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z\"/>",
  "flame": "<path d=\"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z\"/>",
  "heart": "<path d=\"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5\"/>",
  "home": "<path d=\"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8\"/><path d=\"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"/>",
  "instagram": "<rect width=\"20\" height=\"20\" x=\"2\" y=\"2\" rx=\"5\" ry=\"5\"/><path d=\"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z\"/><line x1=\"17.5\" x2=\"17.51\" y1=\"6.5\" y2=\"6.5\"/>",
  "leaf": "<path d=\"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z\"/><path d=\"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12\"/>",
  "map-pin": "<path d=\"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0\"/><circle cx=\"12\" cy=\"10\" r=\"3\"/>",
  "menu": "<path d=\"M4 6h16\"/><path d=\"M4 12h16\"/><path d=\"M4 18h16\"/>",
  "x": "<path d=\"m18 6-12 12\"/><path d=\"m6 6 12 12\"/>",
  "message-circle": "<path d=\"M7.9 20A9 9 0 1 0 4 16.1L2 22Z\"/>",
  "phone": "<path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"/>",
  "send": "<path d=\"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z\"/><path d=\"m21.854 2.147-10.94 10.939\"/>",
  "snowflake": "<path d=\"M2 12h20\"/><path d=\"M12 2v20\"/><path d=\"m20 16-4-4 4-4\"/><path d=\"m4 8 4 4-4 4\"/><path d=\"m16 4-4 4-4-4\"/><path d=\"m8 20 4-4 4 4\"/>",
  "sparkles": "<path d=\"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z\"/><path d=\"M20 3v4\"/><path d=\"M22 5h-4\"/><path d=\"M4 17v2\"/><path d=\"M5 18H3\"/>",
  "star": "<path d=\"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z\"/>",
  "thumbs-up": "<path d=\"M7 10v12\"/><path d=\"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z\"/>",
  "truck": "<path d=\"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2\"/><path d=\"M15 18H9\"/><path d=\"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14\"/><circle cx=\"17\" cy=\"18\" r=\"2\"/><circle cx=\"7\" cy=\"18\" r=\"2\"/>",
  "twitter": "<path d=\"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z\"/>",
  "user": "<path d=\"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2\"/><circle cx=\"12\" cy=\"7\" r=\"4\"/>",
  "whatsapp": "<path d=\"M3 21l1.65-4.9A8.5 8.5 0 1 1 8 19.4L3 21z\"/><path d=\"M9 9.5c0 3 2.5 5.5 5.5 5.5l1.1-1.3-1.9-1-.8.7a3.6 3.6 0 0 1-1.6-1.6l.7-.8-1-1.9L9 9.5z\"/>",
  "zap": "<path d=\"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z\"/>"
};

/* ---------- SETTINGS ---------- */
// WhatsApp number with country code, digits only (no +, spaces or dashes).
const WHATSAPP_NUMBER = '918830532500';
const SHOP_NAME = 'Brew & Bloom';

/* ---------- MENU DATA ---------- */
// img: photo inside the assets folder (replace the file with your own photo, same name)
const products = [
  { id: 1, cat: 'Hot',  name: 'Classic Cappuccino',  price: 180, rating: 4.8, desc: 'Rich espresso with velvety steamed milk foam.',    img: 'assets/classic-cappuccino.jpg' },
  { id: 2, cat: 'Hot',  name: 'Caffè Latte',         price: 190, rating: 4.7, desc: 'Smooth, creamy and perfectly balanced.',           img: 'assets/caffe-latte.jpg' },
  { id: 3, cat: 'Hot',  name: 'Double Espresso',     price: 140, rating: 4.6, desc: 'Bold, intense shot for true coffee lovers.',       img: 'assets/double-espresso.jpg' },
  { id: 4, cat: 'Hot',  name: 'Caramel Macchiato',   price: 230, rating: 4.9, desc: 'Vanilla, milk, espresso and caramel drizzle.',     img: 'assets/caramel-macchiato.jpg' },
  { id: 5, cat: 'Cold', name: 'Iced Americano',      price: 170, rating: 4.5, desc: 'Chilled espresso over ice, crisp and refreshing.', img: 'assets/iced-americano.jpg' },
  { id: 6, cat: 'Cold', name: 'Cold Brew',           price: 220, rating: 4.8, desc: 'Slow-steeped for 18 hours, ultra smooth.',         img: 'assets/cold-brew.jpg' },
  { id: 7, cat: 'Cold', name: 'Mocha Frappe',        price: 250, rating: 4.9, desc: 'Blended chocolate coffee topped with cream.',      img: 'assets/mocha-frappe.jpg' },
  { id: 8, cat: 'Cold', name: 'Hazelnut Iced Latte', price: 240, rating: 4.7, desc: 'Nutty sweetness meets chilled creamy latte.',      img: 'assets/hazelnut-iced-latte.jpg' },
];
const cats = ['All', 'Hot', 'Cold'];
const catIcon = { All: 'sparkles', Hot: 'flame', Cold: 'snowflake' };
const prodIcon = { Hot: 'coffee', Cold: 'cup-soda' };

function ic(n, c = 'w-5 h-5'){
  return `<svg class="inline-block shrink-0 ${c}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n] || ''}</svg>`;
}
function hydrateIcons(root = document){
  root.querySelectorAll('[data-ic]').forEach(el => { el.outerHTML = ic(el.dataset.ic, el.dataset.cls || 'w-5 h-5'); });
  root.querySelectorAll('[data-stars]').forEach(el => {
    const n = +el.dataset.stars;
    el.innerHTML = Array.from({ length: 5 }, (_, i) => ic('star', 'h-4 w-4 fill-current' + (i < n ? '' : ' opacity-30'))).join('');
  });
}

/* ---------- IMAGES: if a photo is missing, the icon underneath shows instead ---------- */
function hideBrokenImages(root = document){
  root.querySelectorAll('img[data-hide-on-error]').forEach(img => {
    if (img.complete && img.naturalWidth === 0) img.remove();
  });
}
document.addEventListener('error', e => {
  if (e.target.tagName === 'IMG' && e.target.hasAttribute('data-hide-on-error')) e.target.remove();
}, true);

/* ---------- HELPERS ---------- */
const $ = id => document.getElementById(id);
const fmt = n => '₹' + n.toLocaleString('en-IN');
const waUrl = msg => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
function openWhatsApp(msg){
  const url = waUrl(msg);
  const w = window.open(url, '_blank');
  if (w) { w.opener = null; } else { window.location.href = url; }
}
function setupContactLinks(){
  document.querySelectorAll('[data-wa]').forEach(a => { a.href = waUrl(`Hello ${SHOP_NAME}! I'd like to know more about your coffee.`); });
  const n = WHATSAPP_NUMBER;
  document.querySelectorAll('[data-phone]').forEach(el => {
    el.textContent = `+${n.slice(0, 2)} ${n.slice(2, 7)} ${n.slice(7)}`;
    if (el.tagName === 'A') el.href = 'tel:+' + n;
  });
}

/* ---------- MENU ---------- */
let activeCat = 'All';
const TAB_BASE = 'inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium shadow-md transition-all duration-300 hover:-translate-y-1 sm:px-6 sm:py-2.5 sm:text-sm';
const TAB_ON   = 'bg-caramel font-semibold text-black shadow-caramel/40';
const TAB_OFF  = 'bg-white text-espresso hover:bg-espresso hover:text-white';

function renderTabs(){
  $('tabs').innerHTML = cats.map(c =>
    `<button type="button" data-cat="${c}" class="${TAB_BASE} ${c === activeCat ? TAB_ON : TAB_OFF}">${ic(catIcon[c], 'h-4 w-4')} ${c}</button>`
  ).join('');
}

function cardHTML(p, i){
  const msg = `Hello ${SHOP_NAME}! I'd like to know more about the ${p.name} (${fmt(p.price)}). Is it available?`;
  return `
  <article class="group relative mt-10 animate-fade-up rounded-3xl border border-caramel/20 bg-white px-3 pb-4 pt-12 text-center shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-espresso hover:bg-espresso hover:shadow-2xl hover:shadow-espresso/40 [animation-delay:${i * 50}ms] sm:mt-12 sm:px-4 sm:pt-14">
    <div class="absolute -top-10 left-1/2 grid h-20 w-20 -translate-x-1/2 place-items-center overflow-hidden rounded-full border-2 border-caramel bg-latte text-caramel shadow-lg ring-4 ring-cream transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:ring-espresso sm:-top-12 sm:h-24 sm:w-24">
      ${ic(prodIcon[p.cat], 'h-8 w-8')}
      <img src="${p.img}" alt="${p.name}" loading="lazy" data-hide-on-error class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
    </div>
    <div class="flex items-center justify-center gap-1.5 text-[10px] font-semibold">
      <span class="rounded-full bg-caramel/15 px-2 py-0.5 uppercase tracking-wider text-mocha transition-colors duration-300 group-hover:bg-caramel group-hover:text-espresso">${p.cat}</span>
      <span class="inline-flex items-center gap-0.5 text-amber-600 transition-colors duration-300 group-hover:text-amber-300">${ic('star', 'h-3 w-3 fill-current')} ${p.rating}</span>
    </div>
    <h3 class="mt-2 font-display text-base font-bold leading-tight transition-colors duration-300 group-hover:text-white sm:text-lg">${p.name}</h3>
    <p class="mt-1 min-h-[2.5rem] text-[11px] leading-snug text-espresso/60 transition-colors duration-300 group-hover:text-white/80 sm:text-xs">${p.desc}</p>
    <div class="mt-3 flex items-center justify-between gap-2 border-t border-dashed border-caramel/40 pt-3 transition-colors duration-300 group-hover:border-white/25">
      <span class="text-base font-bold text-caramel transition-colors duration-300 group-hover:text-amber-300 sm:text-lg">${fmt(p.price)}</span>
      <a href="${waUrl(msg)}" target="_blank" rel="noopener" aria-label="Enquire about ${p.name} on WhatsApp" class="inline-flex h-9 items-center gap-1 rounded-full bg-espresso px-2.5 text-xs font-medium text-white transition-all duration-300 hover:scale-105 group-hover:bg-caramel group-hover:text-espresso">${ic('whatsapp', 'h-4 w-4')} Enquire</a>
    </div>
  </article>`;
}

function renderMenu(){
  const list = products.filter(p => activeCat === 'All' || p.cat === activeCat);
  $('menuGrid').innerHTML = list.map(cardHTML).join('');
  hideBrokenImages($('menuGrid'));
}

$('tabs').addEventListener('click', e => {
  const b = e.target.closest('[data-cat]'); if (!b) return;
  activeCat = b.dataset.cat; renderTabs(); renderMenu();
});

/* ---------- ENQUIRY FORM (sends the enquiry to WhatsApp) ---------- */
const form = $('enquiryForm');
function buildFormOptions(){
  $('fItem').innerHTML = '<option value="General enquiry" selected>General enquiry</option>' +
    ['Hot', 'Cold'].map(c =>
      `<optgroup label="${c}">` + products.filter(p => p.cat === c).map(p => `<option value="${p.name}">${p.name}</option>`).join('') + '</optgroup>'
    ).join('');
}
form.addEventListener('submit', e => {
  e.preventDefault();
  if (!form.reportValidity()) return;
  const d = new FormData(form);
  const lines = [
    `Hello ${SHOP_NAME}! I have an enquiry.`, '',
    `*Name:* ${d.get('name').trim()}`,
    `*Phone:* ${d.get('phone').trim()}`,
    `*Regarding:* ${d.get('item')}`,
    `*Message:* ${d.get('message').trim()}`,
  ];
  $('formNote').classList.remove('hidden');
  setTimeout(() => $('formNote').classList.add('hidden'), 4000);
  openWhatsApp(lines.join('\n'));
});

/* ---------- NAV ---------- */
const NAV_SCROLLED_ON  = ['bg-espresso/90', 'border-caramel/40', 'shadow-2xl'];
const NAV_SCROLLED_OFF = ['bg-white/10', 'border-white/20'];
const LINK_ON  = ['bg-white', 'text-espresso', 'font-semibold'];
const LINK_OFF = ['text-white/85'];
const secIds = ['home', 'menu', 'about', 'reviews', 'contact'];
function onScroll(){
  const scrolled = window.scrollY > 40;
  NAV_SCROLLED_ON.forEach(c => $('navBar').classList.toggle(c, scrolled));
  NAV_SCROLLED_OFF.forEach(c => $('navBar').classList.toggle(c, !scrolled));
  let cur = 'home';
  secIds.forEach(id => { const el = $(id); if (el && el.getBoundingClientRect().top <= 160) cur = id; });
  document.querySelectorAll('.nav-link').forEach(a => {
    const on = a.dataset.sec === cur;
    LINK_ON.forEach(c => a.classList.toggle(c, on));
    LINK_OFF.forEach(c => a.classList.toggle(c, !on));
  });
}
window.addEventListener('scroll', onScroll, { passive: true });
const menuBtn = $('menuBtn');
const mobMenu = $('mobMenu');
menuBtn.addEventListener('click', () => {
  const isOpening = mobMenu.classList.contains('hidden');
  mobMenu.classList.toggle('hidden', !isOpening);
  menuBtn.innerHTML = ic(isOpening ? 'x' : 'menu', 'w-5 h-5');
  menuBtn.setAttribute('aria-label', isOpening ? 'Close menu' : 'Open menu');
  menuBtn.setAttribute('aria-expanded', String(isOpening));
});
document.querySelectorAll('#mobMenu a').forEach(a => a.addEventListener('click', () => {
  mobMenu.classList.add('hidden');
  menuBtn.innerHTML = ic('menu', 'w-5 h-5');
  menuBtn.setAttribute('aria-label', 'Open menu');
  menuBtn.setAttribute('aria-expanded', 'false');
}));

/* ---------- SCROLL REVEAL ---------- */
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.remove('opacity-0', 'translate-y-8'); io.unobserve(e.target); }
}), { threshold: .1 });

/* ---------- INIT ---------- */
$('yr').textContent = new Date().getFullYear();
hydrateIcons();
setupContactLinks();
buildFormOptions();
renderTabs(); renderMenu();
hydrateIcons($('tabs'));
hideBrokenImages();
onScroll();
document.querySelectorAll('[data-reveal]').forEach(el => io.observe(el));
