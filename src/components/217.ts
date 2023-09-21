
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-217`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 217<div>
                <input placeholder="Write here" />
                <button>Button Component 217</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
