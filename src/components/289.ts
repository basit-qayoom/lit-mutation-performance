
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-289`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 289<div>
                <input placeholder="Write here" />
                <button>Button Component 289</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
