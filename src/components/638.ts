
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-638`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 638<div>
                <input placeholder="Write here" />
                <button>Button Component 638</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
