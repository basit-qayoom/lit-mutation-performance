
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-890`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 890<div>
                <input placeholder="Write here" />
                <button>Button Component 890</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
