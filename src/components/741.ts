
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-741`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 741<div>
                <input placeholder="Write here" />
                <button>Button Component 741</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
