const main = document.querySelector("main");
const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section-content");

async function loadContent(section) {
  const file = `content/${section.dataset.section}.md`;

  try {
    const response = await fetch(file);
    if (!response.ok) throw new Error(`Could not load ${file}`);

    const markdown = await response.text();
    const html = marked.parse(markdown, { gfm: true, breaks: true });
    section.innerHTML = DOMPurify.sanitize(html, { USE_PROFILES: { html: true } });
  } catch (error) {
    section.innerHTML = `<p class="content-error">${error.message}</p>`;
  }
}

function selectSection() {
  const hash = window.location.hash || "#me";
  const name = hash.slice(1);
  const selectedSection = document.querySelector(`[data-section="${name}"]`);
  const activeName = selectedSection ? name : "me";

  links.forEach((link) => {
    const selected = link.getAttribute("href") === `#${activeName}`;
    link.classList.toggle("is-active", selected);
    link.toggleAttribute("aria-current", selected);
  });

  sections.forEach((section) => {
    section.hidden = section.dataset.section !== activeName;
  });
  main.id = activeName;
}

selectSection();
Promise.all([...sections].map(loadContent)).then(selectSection);
window.addEventListener("hashchange", selectSection);
