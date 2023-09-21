const fs = require("fs");

const tsCode = (index:any) => `import(/* webpackChunkName:\`${index}\` */ \`./components/${index}\`);
`;

for (let i = 1; i <= 2000; i++) {
  const fileName = `./src/index.ts`;
  fs.appendFile(fileName, tsCode(i), (err:any) => {
    if (err) {
      console.error(`Error writing code to ${fileName}:`);
    } else {
      console.log(`Code for index ${i} has been written to ${fileName}.`);
    }
  });
}
