import fs from "fs";
import path, {dirname} from "path";
import {fileURLToPath} from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const version = process.env.version;

const versionRegex = /v\d\.\d\.\d/
if (!versionRegex.test(version))
    throw new Error(`"${version}" is not a valid version string`);

const templatePath = path.join(__dirname, "../package.json");
const outputPath = path.join(__dirname, "../.bin/package.json");

const json = JSON.parse(fs.readFileSync(templatePath).toString());
json.version = version.slice(1);
fs.writeFileSync(outputPath, JSON.stringify(json, null, 2));
