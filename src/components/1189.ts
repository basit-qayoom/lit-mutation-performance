
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-1189`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 1189<div>
                <input placeholder="Write here" />
                <button>Button Component 1189</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
