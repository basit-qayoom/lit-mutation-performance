
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-221`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 221<div>
                <input placeholder="Write here" />
                <button>Button Component 221</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
