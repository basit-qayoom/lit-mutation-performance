
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-417`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 417<div>
                <input placeholder="Write here" />
                <button>Button Component 417</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
