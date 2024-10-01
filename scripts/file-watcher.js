const chokidar = require("chokidar");
const { exec } = require("child_process");

// Watch the authors and categories directories for changes
const watcher = chokidar.watch(["src/data/authors", "src/data/categories"], {
  ignored: /(^|[\/\\])\../, // Ignore dotfiles
  persistent: true,
});

// Run the aggregation script on change
watcher.on("change", (path) => {
  console.log(`File ${path} has been changed. Running JSON combine script...`);
  exec("node scripts/combine-json.js", (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(stdout);
  });
});

watcher.on("ready", () => {
  console.log("File watcher is ready and watching for changes...");
});
