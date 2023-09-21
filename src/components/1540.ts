
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-1540`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 1540<div>
                <input placeholder="Write here" />
                <button>Button Component 1540</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
