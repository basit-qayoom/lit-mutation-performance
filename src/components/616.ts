
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-616`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 616<div>
                <input placeholder="Write here" />
                <button>Button Component 616</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
