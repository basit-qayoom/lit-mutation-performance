
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-518`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 518<div>
                <input placeholder="Write here" />
                <button>Button Component 518</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
