
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-608`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 608<div>
                <input placeholder="Write here" />
                <button>Button Component 608</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
