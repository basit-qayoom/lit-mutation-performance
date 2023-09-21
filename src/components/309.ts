
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-309`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 309<div>
                <input placeholder="Write here" />
                <button>Button Component 309</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
