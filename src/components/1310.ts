
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-1310`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 1310<div>
                <input placeholder="Write here" />
                <button>Button Component 1310</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
