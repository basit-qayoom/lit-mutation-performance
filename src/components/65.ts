
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-65`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 65<div>
                <input placeholder="Write here" />
                <button>Button Component 65</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
