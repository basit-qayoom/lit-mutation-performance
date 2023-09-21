
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-543`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 543<div>
                <input placeholder="Write here" />
                <button>Button Component 543</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
