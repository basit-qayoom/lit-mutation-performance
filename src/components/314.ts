
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-314`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 314<div>
                <input placeholder="Write here" />
                <button>Button Component 314</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
