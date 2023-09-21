
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-563`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 563<div>
                <input placeholder="Write here" />
                <button>Button Component 563</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
