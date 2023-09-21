
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-1085`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 1085<div>
                <input placeholder="Write here" />
                <button>Button Component 1085</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
