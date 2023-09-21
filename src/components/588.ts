
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-588`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 588<div>
                <input placeholder="Write here" />
                <button>Button Component 588</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
