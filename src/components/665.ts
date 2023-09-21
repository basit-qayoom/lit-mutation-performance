
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-665`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 665<div>
                <input placeholder="Write here" />
                <button>Button Component 665</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
