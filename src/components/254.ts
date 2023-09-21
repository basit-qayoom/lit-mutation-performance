
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-254`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 254<div>
                <input placeholder="Write here" />
                <button>Button Component 254</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
