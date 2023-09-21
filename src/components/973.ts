
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-973`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 973<div>
                <input placeholder="Write here" />
                <button>Button Component 973</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
