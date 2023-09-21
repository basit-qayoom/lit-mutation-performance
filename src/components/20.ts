
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-20`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 20<div>
                <input placeholder="Write here" />
                <button>Button Component 20</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
