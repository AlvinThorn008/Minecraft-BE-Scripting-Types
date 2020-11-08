const { replaceInFileSync } = require("replace-in-file");
const { execSync } = require('child_process');

function callScript(cmd) {
    try {
        execSync(cmd).toString();
    } catch (e) {
        //console.error(e);
    }
}

function replaceFileData(configs) {
    let results = [];
    for (const config of configs) {
        try {
            console.log(replaceInFileSync(config));
        } catch (e) {
            console.error(e);
        }
    }
}

callScript('api-extractor run');

replaceFileData([
    {
        files: './dist/mcbe-typings.d.ts',
        from: /(export)/g,
        to: ''
    }, 
    {
        files: './dist/mcbe-typings.d.ts',
        from: /(declare\sinterface)/g,
        to: 'interface'
    }
]);



