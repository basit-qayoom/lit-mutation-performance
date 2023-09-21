
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-230`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 230<div>
                <input placeholder="Write here" />
                <button>Button Component 230</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
