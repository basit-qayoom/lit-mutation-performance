
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-1429`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 1429<div>
                <input placeholder="Write here" />
                <button>Button Component 1429</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
