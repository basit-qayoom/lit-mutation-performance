
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-307`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 307<div>
                <input placeholder="Write here" />
                <button>Button Component 307</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
