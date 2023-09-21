
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-118`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 118<div>
                <input placeholder="Write here" />
                <button>Button Component 118</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
