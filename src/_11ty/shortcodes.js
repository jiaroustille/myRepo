import filters from "./filters.js";

export default {
  hello(name = "world", attr = "") {
    return `<strong>Hello, ${name}!${attr}</strong>`
  },

  dateTime(pub, upd) {
    if(pub && !upd) {return `<time date-time="${filters.toISOstring(pub)}">${filters.toPrettyString(pub)}</time>`}
    if(!pub && upd) {return `<time date-time="${filters.toISOstring(upd)}">${filters.toPrettyString(upd)}</time>`}
    if(pub && upd) {return `
      <del><time date-time="${filters.toISOstring(pub)}">${filters.toPrettyString(pub)}</time></del><br>
      <time date-time="${filters.toISOstring(upd)}">${filters.toPrettyString(upd)}</time>
    `}
  }
}
