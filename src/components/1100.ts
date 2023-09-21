
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-1100`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 1100<div>
                <input placeholder="Write here" />
                <button>Button Component 1100</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
