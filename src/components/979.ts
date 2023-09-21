
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-979`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 979<div>
                <input placeholder="Write here" />
                <button>Button Component 979</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
