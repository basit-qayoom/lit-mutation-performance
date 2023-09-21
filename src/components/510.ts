
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-510`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 510<div>
                <input placeholder="Write here" />
                <button>Button Component 510</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
