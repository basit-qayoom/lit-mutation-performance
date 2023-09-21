
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-938`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 938<div>
                <input placeholder="Write here" />
                <button>Button Component 938</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
