const fs = require("fs");

const tsCode = (index:any) => `
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(\`pw-${index}\`)
class PWElement extends LitElement {
  override render() {
    return html\`
        <div>
            <hr />
                <div>Component: ${index}<div>
                <input placeholder="Write here" />
                <button>Button Component ${index}</button>
            <hr />
        </div>
    \`;
  }
}

export default PWElement;
`;

for(let i =1; i<=2000; i++){
  fs.writeFileSync(`./src/components/${i}.ts`, tsCode(i), "utf-8");
}
console.log("custom.ts file has been created successfully.");
