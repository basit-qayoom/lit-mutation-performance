
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-123`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 123<div>
                <input placeholder="Write here" />
                <button>Button Component 123</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
