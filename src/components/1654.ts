
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-1654`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 1654<div>
                <input placeholder="Write here" />
                <button>Button Component 1654</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
