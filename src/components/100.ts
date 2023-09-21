
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-100`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 100<div>
                <input placeholder="Write here" />
                <button>Button Component 100</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
