const articles = [
  {
    title: "Minimal UI Design",
    image: "./Images/Rectangle 7428.png",
    slug: "minimal-ui-design",
    content: `
      <h1>Minimal UI Design</h1>
      <p>Minimal design focuses on clarity, whitespace, and purposeful elements.</p>
      <p>It reduces cognitive load and improves usability.</p>
    `
  },
  {
    title: "Designing for Accessibility",
    image: "./Images/Rectangle 7429.png",
    slug: "accessibility-design",
    content: `
      <h1>Designing for Accessibility</h1>
      <p>Accessibility ensures inclusivity for all users.</p>
      <p>Contrast, keyboard navigation, and semantic HTML matter.</p>
    `
  },
  {
    title: "Typography That Breathes",
    image: "./Images/Rectangle 7431.png",
    slug: "typography-spacing",
    content: `
      <h1>Typography That Breathes</h1>
      <p>Good typography balances spacing, rhythm, and hierarchy.</p>
    `
  },
  {
    title: "Calm Color Palettes",
    image: "./Images/Rectangle 7438.png",
    slug: "color-psychology",
    content: `
      <h1>Calm Color Palettes</h1>
      <p>Color psychology influences emotion and trust.</p>
    `
  },
  {
    title: "UX Writing Basics",
    image: "./Images/Rectangle 7439.png",
    slug: "ux-writing",
    content: `
      <h1>UX Writing Basics</h1>
      <p>Clear microcopy guides users and reduces friction.</p>
    `
  },
  {
    title: "Frontend Best Practices",
    image: "",
    slug: "frontend-best-practices",
    content: `
      <h1>Frontend Best Practices</h1>
      <p>Performance, accessibility, and maintainability are key.</p>
    `
  }
];

if (!localStorage.getItem("articlesData")) {
  localStorage.setItem("articlesData", JSON.stringify(articles));
}

const bgClasses = ["bg1", "bg2", "bg3", "bg4", "bg5", "bg6"];

const grid = document.getElementById("articlesGrid");

articles.forEach((article,index) => {
  const bgClass = bgClasses[index % bgClasses.length];
  const col = document.createElement("div");
  col.className = "col-md-4";

  col.innerHTML = `
    <div class="pastel-card ${bgClass}" onclick="openArticle('${article.slug}')">
      <div class="card-content"
        style="background-image: linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)), url('${article.image}')">
        <h6>${article.title}</h6>
        <span>Explore <i class="bi bi-arrow-right-circle"></i></span>
      </div>
    </div>
  `;

  grid.appendChild(col);
});

function openArticle(slug) {
  localStorage.setItem("activeArticle", slug);
  window.location.href = "article.html";
}
