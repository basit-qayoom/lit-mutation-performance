
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-380`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 380<div>
                <input placeholder="Write here" />
                <button>Button Component 380</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
