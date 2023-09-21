
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-255`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 255<div>
                <input placeholder="Write here" />
                <button>Button Component 255</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
