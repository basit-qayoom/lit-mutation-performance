
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-533`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 533<div>
                <input placeholder="Write here" />
                <button>Button Component 533</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
