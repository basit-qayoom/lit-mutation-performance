
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-1286`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 1286<div>
                <input placeholder="Write here" />
                <button>Button Component 1286</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
