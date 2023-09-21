
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-1318`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 1318<div>
                <input placeholder="Write here" />
                <button>Button Component 1318</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
