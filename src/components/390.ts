
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-390`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 390<div>
                <input placeholder="Write here" />
                <button>Button Component 390</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
