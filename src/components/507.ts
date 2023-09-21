
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-507`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 507<div>
                <input placeholder="Write here" />
                <button>Button Component 507</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
