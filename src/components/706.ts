
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-706`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 706<div>
                <input placeholder="Write here" />
                <button>Button Component 706</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
