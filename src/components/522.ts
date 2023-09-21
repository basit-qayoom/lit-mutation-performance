
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-522`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 522<div>
                <input placeholder="Write here" />
                <button>Button Component 522</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
