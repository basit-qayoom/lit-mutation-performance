
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-220`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 220<div>
                <input placeholder="Write here" />
                <button>Button Component 220</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
