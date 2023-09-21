
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-685`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 685<div>
                <input placeholder="Write here" />
                <button>Button Component 685</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
