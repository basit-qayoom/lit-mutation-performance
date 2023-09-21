
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-152`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 152<div>
                <input placeholder="Write here" />
                <button>Button Component 152</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
