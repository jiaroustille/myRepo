import filters from "./src/_11ty/filters.js"
import collections from "./src/_11ty/collections.js"
import shortcodes from "./src/_11ty/shortcodes.js"
import { HtmlBasePlugin } from "@11ty/eleventy"
import { IdAttributePlugin } from "@11ty/eleventy"
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight"
import markdownIt from "markdown-it"

export default function (eleventyConfig) {
	let options = {
		html: true,
		breaks: true,
		linkify: true,
	}
  eleventyConfig.setLibrary("md", markdownIt(options))

  Object.keys(filters).forEach((name) => { eleventyConfig.addFilter(name, filters[name]) })
  Object.keys(collections).forEach((name) => { eleventyConfig.addCollection(name, collections[name]) })
  Object.keys(shortcodes).forEach((name) => {
    eleventyConfig.addShortcode(name, function (...args) {
      return shortcodes[name](...args, this.ctx.collections)
    })
  })

  eleventyConfig.addPlugin(HtmlBasePlugin)
  eleventyConfig.addPlugin(IdAttributePlugin)
  eleventyConfig.addPlugin(syntaxHighlight)
  
  eleventyConfig.addPassthroughCopy("./src/routes/assets/")
  eleventyConfig.addWatchTarget("./src/routes/assets/")

  return {
    dir: {
      input: "./src/routes/",
      output: "docs",
      includes: "../_includes",
      layouts: "../_includes/_layouts",
      data: "../data"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",

    pathPrefix: "/myRepo/"
  }
}
