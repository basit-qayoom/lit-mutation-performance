
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-1826`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 1826<div>
                <input placeholder="Write here" />
                <button>Button Component 1826</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
