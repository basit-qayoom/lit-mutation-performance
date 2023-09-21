
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-830`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 830<div>
                <input placeholder="Write here" />
                <button>Button Component 830</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
