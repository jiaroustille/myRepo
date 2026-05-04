import filters from "./filters.js";

export default {
  hello(name = "world", attr = "") {
    return `<strong>Hello, ${name}!${attr}</strong>`
  },

  dateTime(pub, upd) {
    if(pub && !upd) {return `<time class="dt-published" datetime="${filters.toISOstring(pub)}">${filters.toPrettyString(pub)}</time>`}
    if(!pub && upd) {return `<time class="dt-published" datetime="${filters.toISOstring(upd)}">${filters.toPrettyString(upd)}</time>`}
    if(pub && upd) {return `
      <div>
      <del><time class="dt-published" datetime="${filters.toISOstring(pub)}">${filters.toPrettyString(pub)}</time></del><br>
      <time class="dt-updated" datetime="${filters.toISOstring(upd)}">${filters.toPrettyString(upd)}</time>
      </div>
    `}
  },

  recommended(col, page, collections) {
    const items = collections[col];
    const index = items.findIndex(i => i.url === page.url);
    const prev = items[index - 1];
    const next = items[index + 1];
    const others = items.filter(i => i.url !== page.url);
    const random = others[Math.floor(Math.random() * others.length)];
    return `
      <nav class="recommended">
        ${prev ? `<a class="u-url" href="${prev.url}">&lt;&lt;</a>` : "<span style='opacity: 0.3'>&lt;&lt;</span>"}
        ${random ? `<a class="u-url" href="${random.url}">You may also enjoy: ${random.data.title}</a>` : ""}
        ${next ? `<a class="u-url" href="${next.url}">&gt;&gt;</a>` : "<span style='opacity: 0.3'>&gt;&gt;</span>"}
      </nav>
    `;
  }
}
