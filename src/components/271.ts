
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-271`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 271<div>
                <input placeholder="Write here" />
                <button>Button Component 271</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
