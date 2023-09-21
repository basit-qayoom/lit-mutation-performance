
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-165`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 165<div>
                <input placeholder="Write here" />
                <button>Button Component 165</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
