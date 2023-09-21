
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-244`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 244<div>
                <input placeholder="Write here" />
                <button>Button Component 244</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
