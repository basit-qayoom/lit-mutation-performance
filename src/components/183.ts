
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-183`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 183<div>
                <input placeholder="Write here" />
                <button>Button Component 183</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
