const header = document.querySelector("header");
const links = [...document.querySelectorAll("nav a")];
const sections = [...document.querySelectorAll("main > section")];
const byHash = new Map(links.map(link => [link.hash, link]));
let queued = false;

function updateNavigation() {
  queued = false;
  const threshold = header.getBoundingClientRect().bottom + 50;
  const section = sections.filter(item => item.getBoundingClientRect().top <= threshold).pop();
  const atEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
  const current = atEnd ? byHash.get("#contact") : byHash.get("#" + section?.id);
  for (const link of links) {
    if (link === current) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  }
}

function queueUpdate() {
  if (queued) return;
  queued = true;
  requestAnimationFrame(updateNavigation);
}

window.addEventListener("scroll", queueUpdate, { passive: true });
window.addEventListener("resize", queueUpdate);
updateNavigation();
