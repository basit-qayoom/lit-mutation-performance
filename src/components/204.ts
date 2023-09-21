
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-204`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 204<div>
                <input placeholder="Write here" />
                <button>Button Component 204</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
