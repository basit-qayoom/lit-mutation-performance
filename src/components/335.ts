
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-335`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 335<div>
                <input placeholder="Write here" />
                <button>Button Component 335</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
