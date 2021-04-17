const fs = require('fs').promises;
const directory = "./docs";

try {
  fs.rmdir(directory, { recursive: true });
} catch (e) {
}
