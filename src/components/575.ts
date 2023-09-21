
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-575`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 575<div>
                <input placeholder="Write here" />
                <button>Button Component 575</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
