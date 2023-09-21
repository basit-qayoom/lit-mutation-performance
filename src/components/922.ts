
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-922`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 922<div>
                <input placeholder="Write here" />
                <button>Button Component 922</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
