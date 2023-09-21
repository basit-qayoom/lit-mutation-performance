
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-45`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 45<div>
                <input placeholder="Write here" />
                <button>Button Component 45</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
