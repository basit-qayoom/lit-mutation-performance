const fs = require("fs");

interface EntryItem {
    import: string;
    dependOn: string;
}

const entry: Record<string, EntryItem> = {};

for (let index = 1; index <= 2000; index++) {
    const el = index.toString();
    entry[el] = {
        import: `./src/components/${index}.ts`,
        dependOn: 'shared'
    };
}

const fileName = `./webpackEntry.ts`;
const entryJson = JSON.stringify(entry, null, 2); // Convert entry object to JSON string

fs.writeFile(fileName, entryJson, (err:any) => {
    if (err) {
        console.error(`Error writing code to ${fileName}: ${err}`);
    } else {
        console.log(`Successfully created ${fileName}`);
    }
});
