
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-546`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 546<div>
                <input placeholder="Write here" />
                <button>Button Component 546</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
