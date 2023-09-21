
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-445`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 445<div>
                <input placeholder="Write here" />
                <button>Button Component 445</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
