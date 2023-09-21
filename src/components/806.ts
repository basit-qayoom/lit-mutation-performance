
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-806`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 806<div>
                <input placeholder="Write here" />
                <button>Button Component 806</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
