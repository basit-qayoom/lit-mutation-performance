
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-105`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 105<div>
                <input placeholder="Write here" />
                <button>Button Component 105</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
