
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-399`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 399<div>
                <input placeholder="Write here" />
                <button>Button Component 399</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
