
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-800`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 800<div>
                <input placeholder="Write here" />
                <button>Button Component 800</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
