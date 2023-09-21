
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-473`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 473<div>
                <input placeholder="Write here" />
                <button>Button Component 473</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
