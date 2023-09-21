
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-990`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 990<div>
                <input placeholder="Write here" />
                <button>Button Component 990</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
