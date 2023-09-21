
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-257`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 257<div>
                <input placeholder="Write here" />
                <button>Button Component 257</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
