
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-929`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 929<div>
                <input placeholder="Write here" />
                <button>Button Component 929</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
