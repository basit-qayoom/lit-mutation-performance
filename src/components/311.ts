
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-311`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 311<div>
                <input placeholder="Write here" />
                <button>Button Component 311</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
