function safeDate(input) {
  const d = new Date(input)
  return isNaN(d) ? null : d
}

export default {

  debug(obj) { return Object.keys(obj) },

  // casing
  toUpperCase(str) { return str.toUpperCase() },
  toLowerCase(str) { return str.toLowerCase() },

  deslugify(str) {
    return str
      .replace(/[-_]+/g, " ") // replace fake spaces
      .replace(/\b\w/g, c => c.toUpperCase()) // upper case on new words
  },

  // date
  toISOstring(inp) {
    const date = safeDate(inp)
    return date ? date.toISOString() : ""
  },

  toPrettyString(inp) {
    const date = safeDate(inp)
    if (!date) return ""
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const day = String(date.getDate()).padStart(2, "0")
    return `${year} 年 ${month} 月 ${day} 日`
  },

  // generate
  genDescription(str) {
    if (!str) return "";

    let clean = str.replace(/<[^>]*>/g, "") // html
    clean = clean.replace(/^#{1,6}\s*/gm, "") // headings
    clean = clean.replace(/^>\s*/gm, "") // block quotes
    clean = clean.replace(/^\s*[-*+]\s+/gm, "") // lists
    clean = clean.replace(/\s+/g, " ").trim() // whitespace

    if (clean.length <= 120) return clean
    const short = clean.slice(0, 120)
    const trimmed = short.trimEnd().replace(/\s+\S*$/, "")

    return trimmed + "…";
  }

}
