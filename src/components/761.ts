
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-761`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 761<div>
                <input placeholder="Write here" />
                <button>Button Component 761</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
