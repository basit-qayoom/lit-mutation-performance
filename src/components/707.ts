
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-707`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 707<div>
                <input placeholder="Write here" />
                <button>Button Component 707</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
