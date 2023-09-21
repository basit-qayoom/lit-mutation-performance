
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-704`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 704<div>
                <input placeholder="Write here" />
                <button>Button Component 704</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
