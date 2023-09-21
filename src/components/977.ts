
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-977`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 977<div>
                <input placeholder="Write here" />
                <button>Button Component 977</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
