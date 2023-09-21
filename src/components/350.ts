
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-350`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 350<div>
                <input placeholder="Write here" />
                <button>Button Component 350</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
