
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-252`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 252<div>
                <input placeholder="Write here" />
                <button>Button Component 252</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
