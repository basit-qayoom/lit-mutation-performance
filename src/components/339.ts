
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-339`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 339<div>
                <input placeholder="Write here" />
                <button>Button Component 339</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
