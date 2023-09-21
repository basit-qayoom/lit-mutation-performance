
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-343`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 343<div>
                <input placeholder="Write here" />
                <button>Button Component 343</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
