
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-650`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 650<div>
                <input placeholder="Write here" />
                <button>Button Component 650</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
