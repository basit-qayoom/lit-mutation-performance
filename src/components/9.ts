
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-9`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 9<div>
                <input placeholder="Write here" />
                <button>Button Component 9</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
