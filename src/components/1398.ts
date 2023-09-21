
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-1398`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 1398<div>
                <input placeholder="Write here" />
                <button>Button Component 1398</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
