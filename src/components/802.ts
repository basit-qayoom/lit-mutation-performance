
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-802`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 802<div>
                <input placeholder="Write here" />
                <button>Button Component 802</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
