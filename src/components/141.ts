
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-141`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 141<div>
                <input placeholder="Write here" />
                <button>Button Component 141</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
