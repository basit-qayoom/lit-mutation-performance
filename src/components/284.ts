
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-284`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 284<div>
                <input placeholder="Write here" />
                <button>Button Component 284</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
