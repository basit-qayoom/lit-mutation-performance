
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-344`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 344<div>
                <input placeholder="Write here" />
                <button>Button Component 344</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
