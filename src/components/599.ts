
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-599`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 599<div>
                <input placeholder="Write here" />
                <button>Button Component 599</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
