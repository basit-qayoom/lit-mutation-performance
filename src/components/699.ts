
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-699`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 699<div>
                <input placeholder="Write here" />
                <button>Button Component 699</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
