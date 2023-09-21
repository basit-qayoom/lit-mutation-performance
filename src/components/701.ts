
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-701`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 701<div>
                <input placeholder="Write here" />
                <button>Button Component 701</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
