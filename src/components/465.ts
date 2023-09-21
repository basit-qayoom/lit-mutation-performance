
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-465`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 465<div>
                <input placeholder="Write here" />
                <button>Button Component 465</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
