
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-870`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 870<div>
                <input placeholder="Write here" />
                <button>Button Component 870</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
