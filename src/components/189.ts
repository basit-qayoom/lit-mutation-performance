
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-189`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 189<div>
                <input placeholder="Write here" />
                <button>Button Component 189</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
