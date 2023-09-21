
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-644`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 644<div>
                <input placeholder="Write here" />
                <button>Button Component 644</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
