
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-915`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 915<div>
                <input placeholder="Write here" />
                <button>Button Component 915</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
