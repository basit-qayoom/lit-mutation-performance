
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-629`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 629<div>
                <input placeholder="Write here" />
                <button>Button Component 629</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
