import { terser } from "rollup-plugin-terser";

const isProduction = process.env.NODE_ENV === "production";

const createConfig = format => {
  const name = "vorarbeiterreact";
  let formatSuffix = { es: "esm", umd: "umd", cjs: "cjs" }[format];

  const config = {
    input: "es/index.js",
    output: {
      file: isProduction ? `dist/${name}.${formatSuffix}.min.js` : `dist/${name}.${formatSuffix}.js`,
      format,
      name,
      sourcemap: true
    },
    external: ["react"],
    plugins: [
      isProduction && terser(),
    ]
  };

  if (format === "cjs") {
    config.output.exports = "named";
  }

  if (format === "umd") {
    config.output.globals = { react: "React" };
  }

  return config;
};

export default [
  createConfig("cjs"),
  createConfig("es"),
  createConfig("umd"),
];
