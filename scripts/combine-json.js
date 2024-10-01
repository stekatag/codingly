import fs from "fs";
import path from "path";
import crypto from "crypto";
import { fileURLToPath } from "url";

// Get the current file directory (for ES Modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to store the previous hash
const cacheFilePath = path.join(__dirname, ".json-cache");

// Function to create a hash from the contents of a folder
function createHashFromFiles(folderPath) {
  const hash = crypto.createHash("md5");

  fs.readdirSync(folderPath).forEach((file) => {
    if (path.extname(file) === ".json") {
      const fileContent = fs.readFileSync(path.join(folderPath, file), "utf8");
      hash.update(fileContent);
    }
  });

  return hash.digest("hex");
}

// Function to check if the hash has changed
function hasFolderChanged(folderPath, key) {
  let cache = {};

  // Load the cache from the file (if it exists)
  if (fs.existsSync(cacheFilePath)) {
    const cacheContent = fs.readFileSync(cacheFilePath, "utf8");
    cache = JSON.parse(cacheContent);
  }

  const newHash = createHashFromFiles(folderPath);

  // Compare the new hash with the old hash
  if (cache[key] === newHash) {
    return false; // No changes
  } else {
    cache[key] = newHash; // Update the hash in the cache
    fs.writeFileSync(cacheFilePath, JSON.stringify(cache, null, 2), "utf8");
    return true; // Changes detected
  }
}

// Function to combine JSON files in a folder into a single JSON array
function combineJSONFiles(folderPath, outputFile) {
  const combined = [];

  fs.readdirSync(folderPath).forEach((file) => {
    if (path.extname(file) === ".json") {
      const fileContent = fs.readFileSync(path.join(folderPath, file), "utf8");
      combined.push(JSON.parse(fileContent));
    }
  });

  fs.writeFileSync(outputFile, JSON.stringify(combined, null, 2), "utf8");
  console.log(`Combined JSON saved to ${outputFile}`);
}

// Combine authors JSON files only if they have changed
if (hasFolderChanged(path.join(__dirname, "../src/data/authors"), "authors")) {
  combineJSONFiles(
    path.join(__dirname, "../src/data/authors"),
    path.join(__dirname, "../src/data/authors.json")
  );
} else {
  console.log("No changes detected in authors, skipping JSON combination.");
}

// Combine categories JSON files only if they have changed
if (
  hasFolderChanged(path.join(__dirname, "../src/data/categories"), "categories")
) {
  combineJSONFiles(
    path.join(__dirname, "../src/data/categories"),
    path.join(__dirname, "../src/data/categories.json")
  );
} else {
  console.log("No changes detected in categories, skipping JSON combination.");
}
