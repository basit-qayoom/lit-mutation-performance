
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-295`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 295<div>
                <input placeholder="Write here" />
                <button>Button Component 295</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
