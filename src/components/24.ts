
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-24`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 24<div>
                <input placeholder="Write here" />
                <button>Button Component 24</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
