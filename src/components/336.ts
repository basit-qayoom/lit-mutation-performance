
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-336`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 336<div>
                <input placeholder="Write here" />
                <button>Button Component 336</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
