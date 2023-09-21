
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-680`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 680<div>
                <input placeholder="Write here" />
                <button>Button Component 680</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
