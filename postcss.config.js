const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    purgecss({
      content: [
        "./content/**/*.md",
        "./data/**/*.{yml,yaml,json}",
        "./layouts/**/*.html",
        "./themes/dean/layouts/**/*.html",
      ],
      safelist: {
        standard: [
          "show",
          "active",
          "modal",
          "overlay",
          "card",
          "button",
          "highlight",
          "chroma",
          "lntable",
          "lntd",
          "lnt",
          "hl",
          "line",
          "ln",
          "code",
          "pre",
          "kbd",
          "samp",
        ],
        greedy: [
          /^chroma/,
          /^highlight/,
          /^lnt/,
          /^ln/,
          /^line/,
          /^language-/,
          /^[a-z]{1,2}$/,
        ],
      },
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
  ],
};
