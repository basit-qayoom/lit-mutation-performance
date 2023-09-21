
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-792`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 792<div>
                <input placeholder="Write here" />
                <button>Button Component 792</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
