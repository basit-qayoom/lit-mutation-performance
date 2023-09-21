
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-880`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 880<div>
                <input placeholder="Write here" />
                <button>Button Component 880</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
