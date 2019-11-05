const path = require("path");

module.exports = {
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");

    // очищаем все существующие загрузчики.
    svgRule.uses.clear();

    // добавляем загрузчик для замены
    svgRule
      .use("url")
      .loader("url-loader")
      .end()
      .use("svg")
      .loader("svg-transform-loader")
      .end();

    config.resolve.alias.set("$root", path.resolve(__dirname));
  }
};
