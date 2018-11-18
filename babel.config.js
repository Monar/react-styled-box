module.exports = {
  presets: [["@babel/env", { modules: false }]],
  env: {
    test: {
      presets: ["@babel/react", "@babel/env"],
    },
  },
}
