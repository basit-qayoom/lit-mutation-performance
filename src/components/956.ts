
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-956`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 956<div>
                <input placeholder="Write here" />
                <button>Button Component 956</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
