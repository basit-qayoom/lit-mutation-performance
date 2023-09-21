
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-560`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 560<div>
                <input placeholder="Write here" />
                <button>Button Component 560</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
