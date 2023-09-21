
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-128`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 128<div>
                <input placeholder="Write here" />
                <button>Button Component 128</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
