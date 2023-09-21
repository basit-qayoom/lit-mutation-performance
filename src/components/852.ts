
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-852`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 852<div>
                <input placeholder="Write here" />
                <button>Button Component 852</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
