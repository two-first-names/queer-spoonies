export default {
  eleventyComputed: {
    eleventyNavigation: {
      key: (data) => data.title
    },
    collection: "page"
  }
}