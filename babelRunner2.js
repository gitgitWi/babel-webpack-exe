// @babel/core 로 직접 바벨 설정하기
const babel = require("@babel/core");
const fs = require("fs");

const filename = "./src/code.js";
const source = fs.readFileSync(filename, "utf8");
const presets = ["@babel/preset-react"];

const { ast } = babel.transformSync(source, {
  filename,
  ast: true,
  code: false,
  presets,
  configFile: false,
});

const { code: code1 } = babel.transformFromAstSync(ast, source, {
  filename,
  plugins: ["@babel/plugin-transform-template-literals"],
  configFile: false,
});

const { code: code2 } = babel.transformFromAstSync(ast, source, {
  filename,
  plugins: ["@babel/plugin-transform-arrow-functions"],
  configFile: false,
});

// babel로 변경된 코드 출력
console.log(code1, "\n\n");

console.log(code2);
