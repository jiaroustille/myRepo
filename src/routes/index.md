---
title: Homepage
type: WebSite
eleventyComputed:
  eleventyExcludeFromCollections: true
---
{{ title | toUpperCase }}
{{ title | toLowerCase }}
{{ title | deslugify }}

{% hello "Eleventy", "^u^" %}
