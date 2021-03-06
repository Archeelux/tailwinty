const purgecss = require("@fullhuman/postcss-purgecss")({
  // Specify the paths to all of the template files in your project
  content: ["./src/**/*.njk"],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

module.exports = {
  plugins: [
    require("postcss-import"),
    require("precss"),
    require("postcss-preset-env"),
    require("tailwindcss"),
    require("autoprefixer"),
    require("cssnano"),
    ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
  ]
};
