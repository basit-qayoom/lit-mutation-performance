
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-815`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 815<div>
                <input placeholder="Write here" />
                <button>Button Component 815</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
