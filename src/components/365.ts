
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-365`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 365<div>
                <input placeholder="Write here" />
                <button>Button Component 365</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
