const themeList = document.querySelector("#themes");
const extensionURL = chrome.extension.getURL("/");
let EditorThemes = {};
let customThemes = {};

async function fetchThemes() {
  const resp = await fetch(`${extensionURL}TMThemes/themepkg.json`);
  const { themeRoot, themes } = await resp.json();
  const definedThemes = {};

  chrome.storage.sync.get(data => {
    if (data["CustomThemes"]) {
      for (const themeName in data["CustomThemes"]) {
        definedThemes[themeName] = data["CustomThemes"][themeName];
        customThemes[themeName] = data["CustomThemes"][themeName];
      }
    }
  });

  for (let [ themeName, filePath ] of Object.entries(themes)) {
    if (!filePath.includes(".tmTheme")) filePath += ".tmTheme";
    if (filePath.startsWith("/")) filePath = filePath.substring(1); // Allows the use of /path
    else if (filePath.startsWith("./")) filePath = filePath.substring(2); // Allows the use of ./path

    const themeresp = await fetch(`${extensionURL}${themeRoot}/${filePath}`);
    const themetext = await themeresp.text();

    try {
      definedThemes[themeName] = MonacoThemes.parseTmTheme(themetext);
    } catch (err) {}
  }

  console.log("Themes initialized!");

  return definedThemes;
}

function replaceKeys(key) {
  const keys = {
    "<": "",
    ">": "",
    " ": "-",
    "\'": "",
    "&": "and"
  };

  if (keys.hasOwnProperty(key)) return keys[key];
  
  return key;
}

function escapeStr(str) {
  const keys = {
    "<": "&lt;",
    ">": "&gt;"
  }

  function escapeKey(key) {
    if (keys[key]) {
      return keys[key];
    }

    return key;
  }

  return str.replace(/<|>/g, escapeKey);
}

async function updateThemeList() {
  let defaultValue = `<option value="" disabled selected>Select a Theme</option>`;
  let selectedTheme = ""
  chrome.storage.sync.get((data) => {
    if (data.SelectedTheme) {
      defaultValue = `<option value="${data.SelectedTheme}" disabled selected>${data.SelectedTheme}</option>`;
      selectedTheme = data.SelectedTheme;
    }
  });

  const themes = await fetchThemes();
  EditorThemes = themes;

  console.log(themes);

  if (typeof monaco != "undefined") {
    for (const themeName in EditorThemes) {
      const newName = themeName.replace(/\s|\<|\>|\'|\&/g, replaceKeys);
      const themeData = EditorThemes[themeName];
  
      monaco.editor.defineTheme(newName, themeData);
    }

    try {
      monaco.editor.setTheme(selectedTheme.replace(/\s|\<|\>|\'|\&/g, replaceKeys));
    } catch (err) {}
  }

  themeList.innerHTML = defaultValue;
  for (const themeName in themes) {
    themeList.innerHTML += `<option value="${themeName}">${themeName}</option>`;
    console.log(themeName);
  }
}

themeList.addEventListener("change", (e) => {
  chrome.storage.sync.set({
    "SelectedTheme": themeList.value
  });

  if (typeof monaco != "undefined") {
    if (EditorThemes[themeList.value]) {
      const newName = themeList.value.replace(/\s|\<|\>|\'|\&/g, replaceKeys);
      monaco.editor.setTheme(newName);
    }
  }
});