import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import { EleventyHtmlBasePlugin } from "@11ty/eleventy";

import dateFilter from "./_lib/filters/date.js";

export default function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  eleventyConfig.addFilter('date', dateFilter);

  eleventyConfig.addPassthroughCopy("admin/*");
  eleventyConfig.addPassthroughCopy("assets/*");
};