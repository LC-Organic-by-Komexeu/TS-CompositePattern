import { build } from "vite";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const wwwDir = "wwwroot/js";
const distDir = "wwwroot/dist";
const jsDir = path.resolve(__dirname, wwwDir);

// 先刪除dist資料夾
deleteFolderRecursive(distDir)

// 找到wwwDir底下所有的JS
const jsFiles = findJsFiles(jsDir);
// 轉換為KeyValue格式
const libraries = jsFiles
    .map((filePath) => {
        const name = path
            .relative(path.join(__dirname, wwwDir), filePath)
            .replace(/\\/g, "/");
        return name;
    })
    .reduce((acc, name) => {
        acc.push({ [name]: path.resolve(wwwDir, name) });
        return acc;
    }, []);

libraries.forEach(async (lib) => {
    await build({
        build: {
            rollupOptions: {
                input: lib,
                output: {
                    format: "iife",
                    dir: distDir,
                    entryFileNames: `js/[name]`
                },
            },
            emptyOutDir: false,
        },
    });
});

/**
 * 找到目錄下所有.js檔案
 * @param {string} dir
 * @returns
 */
function findJsFiles(dir) {
    const jsFiles = [];

    fs.readdirSync(dir).forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            jsFiles.push(...findJsFiles(filePath));
        } else if (path.extname(file) === ".js") {
            jsFiles.push(filePath);
        }
    });

    return jsFiles;
}

/**
 * 刪除指定的目錄，包含子目錄與檔案
 * @param {string} url
 */
function deleteFolderRecursive(url) {
    var files = [];
    if (fs.existsSync(url)) {
        files = fs.readdirSync(url);
        files.forEach(function (file, index) {

            var curPath = path.join(url, file);
            if (fs.statSync(curPath).isDirectory()) { // recurse
                deleteFolderRecursive(curPath);

            } else {
                fs.unlinkSync(curPath);
            }
        });

        fs.rmdirSync(url);
    }
}
