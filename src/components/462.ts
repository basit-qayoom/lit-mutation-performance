
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-462`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 462<div>
                <input placeholder="Write here" />
                <button>Button Component 462</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
