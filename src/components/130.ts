
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-130`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 130<div>
                <input placeholder="Write here" />
                <button>Button Component 130</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
