
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-211`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 211<div>
                <input placeholder="Write here" />
                <button>Button Component 211</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
