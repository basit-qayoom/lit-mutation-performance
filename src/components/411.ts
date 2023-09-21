
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-411`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 411<div>
                <input placeholder="Write here" />
                <button>Button Component 411</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
