
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-742`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 742<div>
                <input placeholder="Write here" />
                <button>Button Component 742</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
