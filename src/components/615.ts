
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-615`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 615<div>
                <input placeholder="Write here" />
                <button>Button Component 615</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
