
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-475`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 475<div>
                <input placeholder="Write here" />
                <button>Button Component 475</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
