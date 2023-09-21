
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-1399`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 1399<div>
                <input placeholder="Write here" />
                <button>Button Component 1399</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
