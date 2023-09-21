
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-235`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 235<div>
                <input placeholder="Write here" />
                <button>Button Component 235</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
