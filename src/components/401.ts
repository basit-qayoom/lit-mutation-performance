
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-401`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 401<div>
                <input placeholder="Write here" />
                <button>Button Component 401</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
