const editorContainer = document.getElementById("editor");

require.config({ paths: { 'vs': './libs/monaco/vs' }});

require(['vs/editor/editor.main'], async function() {

  for (const themeName in EditorThemes) {
    const newName = themeName.replace(/\s|\<|\>|\'|\&/g, replaceKeys);
    const themeData = EditorThemes[themeName];

    monaco.editor.defineTheme(newName, themeData);
  }

  const modelUri = monaco.Uri.parse("file:///theme.json");
  const model = monaco.editor.createModel("{}", "json", modelUri);

  window.editor = monaco.editor.create(editorContainer, {
    scrollBeyondLastLine: false,
    scrollbar: {
      // Subtle shadows to the left & top. Defaults to true.
      useShadows: false,
  
      // Render vertical arrows. Defaults to false.
      verticalHasArrows: false,
      // Render horizontal arrows. Defaults to false.
      horizontalHasArrows: false,
  
      // Render vertical scrollbar.
      // Accepted values: 'auto', 'visible', 'hidden'.
      // Defaults to 'auto'
      vertical: 'visible',
      // Render horizontal scrollbar.
      // Accepted values: 'auto', 'visible', 'hidden'.
      // Defaults to 'auto'
      horizontal: 'visible',
  
      verticalScrollbarSize: 13,
      horizontalScrollbarSize: 13
      // arrowSize: 30
    },
    minimap: {
      enabled: false
    },
    model
  });

  let mainSchemas = [];
  let i = 0;
  for (const schema of schemas) {
    mainSchemas.push({
      uri: `file:///schema${i}.json`,
      fileMatch: ["*"],
      schema
    });
    i++;
  }

  monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
    validate: true,
    schemas: mainSchemas
  });

  updateThemeList();
});

function saveTheme() {
  const value = JSON.parse(window.editor.getValue());
  const themeName = value.name;

  let replaceOld = "yes";

  if (EditorThemes.hasOwnProperty(themeName)) {
    replaceOld = prompt(`A theme with this name already exists. Do you want to replace it?`, "No").toLowerCase();
  }

  if (replaceOld == "yes" || replaceOld == "y") {
    EditorThemes[themeName] = value;
    customThemes[themeName] = value;

    console.log(customThemes);

    chrome.storage.sync.set({
      "CustomThemes": customThemes
    });
  }

  updateThemeList();

  console.log(value);
}

function setEditorValue() {
  const themeData = (EditorThemes[themeList.value]) ? EditorThemes[themeList.value] : customThemes[themeList.value];
  themeData.name = themeList.value;

  window.editor.setValue(JSON.stringify(themeData, null, 4));
}

document.getElementById("saveThemeBtn").addEventListener("click", saveTheme);
document.getElementById("getCurrentTheme").addEventListener("click", setEditorValue);