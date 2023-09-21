
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-626`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 626<div>
                <input placeholder="Write here" />
                <button>Button Component 626</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
