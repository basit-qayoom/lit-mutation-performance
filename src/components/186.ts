
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-186`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 186<div>
                <input placeholder="Write here" />
                <button>Button Component 186</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
