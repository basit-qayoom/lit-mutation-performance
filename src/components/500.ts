
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-500`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 500<div>
                <input placeholder="Write here" />
                <button>Button Component 500</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
