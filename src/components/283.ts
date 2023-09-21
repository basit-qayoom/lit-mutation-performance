
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-283`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 283<div>
                <input placeholder="Write here" />
                <button>Button Component 283</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
