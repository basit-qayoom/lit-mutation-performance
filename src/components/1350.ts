
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-1350`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 1350<div>
                <input placeholder="Write here" />
                <button>Button Component 1350</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
