
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-227`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 227<div>
                <input placeholder="Write here" />
                <button>Button Component 227</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
