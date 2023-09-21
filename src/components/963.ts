
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-963`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 963<div>
                <input placeholder="Write here" />
                <button>Button Component 963</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
