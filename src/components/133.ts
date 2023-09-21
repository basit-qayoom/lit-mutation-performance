
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-133`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 133<div>
                <input placeholder="Write here" />
                <button>Button Component 133</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
