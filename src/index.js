import { getInput, setFailed } from "@actions/core";
import { buildGlobalScripts } from "@single-spa/build-global-script-deps";
import { readFile } from "node:fs/promises";

let globalScriptsStr;
try {
  globalScriptsStr = await readFile(getInput("global-scripts"));
} catch (err) {
  console.error(err);
  setFailed(
    `Unable to read global scripts template from filePath '${getInput("global-scripts")}'`,
  );
}

let globalScriptsJson;
try {
  globalScriptsJson = JSON.parse(globalScriptsStr);
} catch (err) {
  console.error(err);
  setFailed(
    `global-scripts file contains invalid json JSON. File path '${getInput("global-scripts")}'`,
  );
}

if (
  !globalScriptsJson["global-scripts"] ||
  !Array.isArray(globalScriptsJson["global-scripts"])
) {
  setFailed(
    `global-scripts JSON file must contain top-level property called 'global-scripts' that contains an array of strings`,
  );
}

await buildGlobalScripts({
  globalScripts: globalScriptsJson["global-scripts"],
  outputDir: getInput("output-dir"),
});
