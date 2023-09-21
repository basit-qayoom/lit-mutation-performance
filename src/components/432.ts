
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-432`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 432<div>
                <input placeholder="Write here" />
                <button>Button Component 432</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
