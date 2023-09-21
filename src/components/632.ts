
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-632`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 632<div>
                <input placeholder="Write here" />
                <button>Button Component 632</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
