const fs = require("fs").promises;

const directory = "dist";

try {
  fs.rmdir(directory, { recursive: true });
} catch (e) {
}
