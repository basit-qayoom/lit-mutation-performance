
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-843`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 843<div>
                <input placeholder="Write here" />
                <button>Button Component 843</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
