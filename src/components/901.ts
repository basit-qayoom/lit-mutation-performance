
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-901`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 901<div>
                <input placeholder="Write here" />
                <button>Button Component 901</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
