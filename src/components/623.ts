
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-623`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 623<div>
                <input placeholder="Write here" />
                <button>Button Component 623</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
