
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-328`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 328<div>
                <input placeholder="Write here" />
                <button>Button Component 328</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
