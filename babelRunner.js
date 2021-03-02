// @babel/core 로 직접 바벨 설정하기
const babel = require("@babel/core");
const fs = require("fs");

const filename = "./src/code.js";
const source = fs.readFileSync(filename, "utf8");
const presets = ["@babel/preset-env", "@babel/preset-react"];
const plugins = [
  "@babel/plugin-transform-arrow-functions",
  "@babel/plugin-transform-template-literals",
];

const { code } = babel.transformSync(source, {
  filename,
  presets,
  plugins,
  configFile: false, // babel.config.js 대신 현재 파일 설정 사용
});

// babel로 변경된 코드 출력
console.log(code);
