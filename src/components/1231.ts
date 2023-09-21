
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-1231`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 1231<div>
                <input placeholder="Write here" />
                <button>Button Component 1231</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
