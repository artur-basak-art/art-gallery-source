import fs from "fs";
import loadMonsters from "./src/data/monsters.js";
import loadWereMonsters from "./src/data/were-monsters.js";
import loadGhosts from "./src/data/ghosts.js";
import loadGods from "./src/data/gods.js";

const urls = [];
[
  ...loadGods().data.categories,
  ...loadGhosts().data.categories,
  ...loadMonsters().data.categories,
  ...loadWereMonsters().data.categories,
].forEach((category) => {
  urls.push(`
<url>
    <loc>https://arturbasak.art/#/${category.root}</loc>
    <changefreq>weekly</changefreq>
</url>
  `);
  urls.push(
    ...category.items.map(
      (item) => `
<url>
    <loc>https://arturbasak.art/#/${category.root}/${item.src}</loc>
    <changefreq>weekly</changefreq>
</url>
  `
    )
  );
});

const d = new Date();

const content = `
<?xml version="1.0" encoding="UTF-8"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <url>
      <loc>https://arturbasak.art/</loc>
      <lastmod>${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
   </url>
   ${urls.join("")}
</urlset>
`;

console.log(content);
fs.writeFile("./public/sitemap.xml", content, (err) => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});
