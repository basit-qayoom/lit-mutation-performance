
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-690`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 690<div>
                <input placeholder="Write here" />
                <button>Button Component 690</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
