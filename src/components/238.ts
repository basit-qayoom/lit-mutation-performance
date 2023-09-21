
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-238`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 238<div>
                <input placeholder="Write here" />
                <button>Button Component 238</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
