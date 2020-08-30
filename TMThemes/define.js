const fs = require("fs");
const Path = require("path");

function readDirectories(dir = "./") {
  const data = fs.readdirSync(dir);
  const ignore = ["define.js", "themepkg.json"];
  let paths = [];

  for (const name of data) {
    if (fs.statSync(Path.join(dir, name)).isDirectory()) {
      paths = [...readDirectories(Path.join(dir, name))];
    } else if (!ignore.includes(name) && name.includes(".tmTheme")) {
      paths.push("/" + Path.join(dir, name).replace(/\\/g, "/"));
    }
  }

  return paths;
}

function getThemeName(path) {
  if (!path) return path;
  const patharr = path.split("/");

  path = patharr[patharr.length-1];

  path = path.replace(/(\.tmTheme)|\(|\)/g, "");

  return path;
}

function main() {
  const tmThemes = readDirectories("./");
  const themes = {
    themeRoot: "TMThemes",
    themes: {}
  };

  for (const path of tmThemes) {
    const themeName = getThemeName(path);
    themes.themes[themeName] = path;
  }


  fs.writeFile("./themepkg.json", JSON.stringify(themes, null, 2), (err) => {
    if (err) throw err;
  });
}

main();