export default {
  markdownIt: {
  	html: true,
		breaks: true,
		linkify: true,
  },
  eleventyImageTransformPlugin: {
		htmlOptions: {
			imgAttributes: {
				loading: "lazy",
				decoding: "async",
			},
		},
  }
}