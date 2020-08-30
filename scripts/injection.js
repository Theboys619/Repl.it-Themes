const FILETABS = "file-header-name";
const FILETAB = "file-header-tab";
const FIRSTTAB = "first";
const SIDENAV = "side-nav";
const FILETREE = "file-tree";
const NAVBAR = "sidebar-layout-header";

let currentTheme = {};

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

function defineThemes() {
  for (let themeName in themes) {
    const themeData = themes[themeName];
    themeName = themeName.replace(/\s|\<|\>|\'|\&/g, replaceKeys);

    try {
      monaco.editor.defineTheme(themeName, themeData);
    } catch (err) {
      console.log(themeName, err);
    }
  }

  for (let themeName in customThemes) {
    const themeData = customThemes[themeName];
    themeName = themeName.replace(/\s|\<|\>|\'|\&/g, replaceKeys);

    delete themeData.name;

    try {
      monaco.editor.defineTheme(themeName, themeData);
    } catch (err) {
      console.log(themeName, err);
    }
  }

  console.log("Themes defined successfully!")

  if (selectedTheme == "none" || selectedTheme == "NONE") {
    return;
  }

  monaco.editor.setTheme(selectedTheme);
}

function setTheme(e, themeName = "Solarized Dark") {
  themeName = selectedTheme;

  let useDefaultTheme = "yes";

  if (!selectedTheme || selectedTheme == "none" || selectedTheme == "NONE") {
    return;
  }

  if (customThemes && customThemes.hasOwnProperty(themeName)) {
    if (themes.hasOwnProperty(themeName))
      useDefaultTheme = prompt("A custom theme with the name of a deafult theme found. Would you like to use the default?", "yes").toLowerCase();

    useDefaultTheme = "no";
  }

  const themeData = (useDefaultTheme == "yes" || useDefaultTheme == "y") ? themes[themeName] : customThemes[themeName];
  themeName = themeName.replace(/\s|\<|\>|'|\&/g, replaceKeys);
  delete themeData.name;

  currentTheme = themeData;

  const sideNav = document.getElementsByClassName(SIDENAV)[0];
  const fileTree = document.getElementsByClassName(FILETREE)[0];
  const firstTab = document.getElementsByClassName(FIRSTTAB)[0];
  const navBar = document.getElementsByClassName(NAVBAR)[0];
  const buttons = document.querySelectorAll("button[role='button']");
  const buttonsDiv = document.querySelectorAll("div[role='button']")[0];

  if (sideNav) {
    sideNav.style.backgroundColor = themeData.colors["editor.background"];
    sideNav.style.color = themeData.colors["editor.foreground"];
  }

  if (fileTree) {
    fileTree.style.backgroundColor = themeData.colors["editor.background"];
    fileTree.style.color = themeData.colors["editor.foreground"];
  }

  if (firstTab) {
    firstTab.style.backgroundColor = themeData.colors["editor.background"];
    firstTab.style.color = themeData.colors["editor.foreground"];
  }

  if (navBar) {
    navBar.style.backgroundColor = themeData.colors["editor.background"];
    navBar.style.color = themeData.colors["editor.foreground"];
  }

  if (buttonsDiv) {
    buttonsDiv.style.backgroundColor = themeData.colors["editor.background"];
    buttonsDiv.style.color = themeData.colors["editor.foreground"];
  }

  for (const button of buttons) {
    if (button.nodeType && !(button.classList.contains("primary") || button.classList.contains("clear-button"))) {
      button.style.backgroundColor = themeData.colors["editor.background"];
      button.style.color = themeData.colors["editor.foreground"];
    }
  }

  setTimeout(() => {
    monaco.editor.setTheme(themeName);
  }, 150);
}

defineThemes();


// Event Listeners //

document.getElementsByClassName(FILETABS)[0].addEventListener("DOMNodeInserted", (e) => {
  const newTab = e.path[0];

  if (!currentTheme || !newTab.style || !currentTheme.colors) return;

  newTab.style.backgroundColor = currentTheme.colors["editor.background"];
  newTab.style.color = currentTheme.colors["editor.foreground"];
});

const sideBarParent = document.getElementsByClassName(FILETREE)[0].parentElement.parentElement;
sideBarParent.addEventListener("DOMNodeRemoved", (e) => {
  function recolorSidebar(e) {
    setTheme({}, "");
    
    //e.srcElement.classList.contains("file-tree")

    sideBarParent.removeEventListener("DOMNodeRemoved", recolorSidebar);
  }

  if (e.srcElement.children[0] && e.srcElement.children[0].classList.contains("file-tree"))
    sideBarParent.addEventListener("DOMNodeInserted", recolorSidebar);
});

monaco.editor.onDidCreateEditor(setTheme);
monaco.editor.onDidCreateModel(setTheme);