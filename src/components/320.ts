
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-320`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 320<div>
                <input placeholder="Write here" />
                <button>Button Component 320</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
