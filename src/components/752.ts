
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-752`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 752<div>
                <input placeholder="Write here" />
                <button>Button Component 752</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
