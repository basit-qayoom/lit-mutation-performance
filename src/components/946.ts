
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-946`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 946<div>
                <input placeholder="Write here" />
                <button>Button Component 946</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
