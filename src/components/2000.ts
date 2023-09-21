
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-2000`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 2000<div>
                <input placeholder="Write here" />
                <button>Button Component 2000</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
