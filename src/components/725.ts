
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-725`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 725<div>
                <input placeholder="Write here" />
                <button>Button Component 725</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
