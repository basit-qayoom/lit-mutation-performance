
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-196`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 196<div>
                <input placeholder="Write here" />
                <button>Button Component 196</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
