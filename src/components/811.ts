
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-811`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 811<div>
                <input placeholder="Write here" />
                <button>Button Component 811</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
