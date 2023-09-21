
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-132`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 132<div>
                <input placeholder="Write here" />
                <button>Button Component 132</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
