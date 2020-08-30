const definedThemes = {};
const customThemes = {};
const extensionURL = chrome.extension.getURL("/");

async function fetchThemes() {
  const resp = await fetch(`${extensionURL}TMThemes/themepkg.json`);
  const { themeRoot, themes } = await resp.json();

  chrome.storage.sync.get(data => {
    if (data["CustomThemes"]) {
      for (const themeName in data["CustomThemes"]) {
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
    } catch (err) {
      alert(`There was a problem loading theme ${themeName}! Please check the console for details!`);
      console.error(`Failed loading theme ${themeName}! Error below:`);
      console.error(err);
    }
  }

  console.log("Themes initialized!");

  return definedThemes;
}

async function main() {
  await fetchThemes();

  const themeStr = JSON.stringify(definedThemes, null, 2);
  let selectedTheme = "NONE";

  chrome.storage.sync.get((data) => {
    if (data.SelectedTheme) {
      selectedTheme = data.SelectedTheme;
    }

    if (window.location.origin.includes("repl.it")) {
      injectScript(null, `const themes = ${themeStr};`, `let customThemes = ${JSON.stringify(customThemes, null, 2)};`, `let selectedTheme = '${selectedTheme}';`);
      injectScript("injection.js");
    }
  });
}

function injectScript(scriptname, ...args) {
  const script = document.createElement("script");
  try {
    script.setAttribute("crossorigin", "anonymous");
    if (scriptname)
      script.setAttribute("src", chrome.extension.getURL(`/scripts/${scriptname}`));
    else
      script.textContent = args.join("\n");

    (document.head || document.documentElement).appendChild(script);

    console.log(`(${scriptname || "Text Injection"}) Injection successful!`)
  } catch (e) {
    console.error(`(${scriptname || "Text Injection"}) Injection failed! Please reload or reinstall extension!`);
  }
}

main();