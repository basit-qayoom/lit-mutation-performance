
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-12`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 12<div>
                <input placeholder="Write here" />
                <button>Button Component 12</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
