
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-898`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 898<div>
                <input placeholder="Write here" />
                <button>Button Component 898</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
