
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-426`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 426<div>
                <input placeholder="Write here" />
                <button>Button Component 426</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
