
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-158`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 158<div>
                <input placeholder="Write here" />
                <button>Button Component 158</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
