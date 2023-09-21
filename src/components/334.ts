
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-334`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 334<div>
                <input placeholder="Write here" />
                <button>Button Component 334</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
