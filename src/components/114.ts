
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-114`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 114<div>
                <input placeholder="Write here" />
                <button>Button Component 114</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
