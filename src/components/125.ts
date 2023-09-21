
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-125`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 125<div>
                <input placeholder="Write here" />
                <button>Button Component 125</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
