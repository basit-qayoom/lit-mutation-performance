
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-654`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 654<div>
                <input placeholder="Write here" />
                <button>Button Component 654</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
