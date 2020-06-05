require("shelljs/global");

exports.copyAssets = () => {
  rm("-rf", "dist");
  mkdir("dist");
  cp(`chrome/manifest.json`, `dist/manifest.json`);
  // cp("-R", "chrome/assets/*", "dist");
  cp("-R", "chrome/views/*", "dist");
  mkdir(`dist/js`);
};
