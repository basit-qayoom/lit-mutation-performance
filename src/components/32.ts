
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-32`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 32<div>
                <input placeholder="Write here" />
                <button>Button Component 32</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
