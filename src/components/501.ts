
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-501`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 501<div>
                <input placeholder="Write here" />
                <button>Button Component 501</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
