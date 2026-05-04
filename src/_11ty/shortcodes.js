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
  }
}
