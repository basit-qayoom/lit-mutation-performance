
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-535`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 535<div>
                <input placeholder="Write here" />
                <button>Button Component 535</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
