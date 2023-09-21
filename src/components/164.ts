
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-164`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 164<div>
                <input placeholder="Write here" />
                <button>Button Component 164</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
