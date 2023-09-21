
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-511`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 511<div>
                <input placeholder="Write here" />
                <button>Button Component 511</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
