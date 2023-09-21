
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-606`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 606<div>
                <input placeholder="Write here" />
                <button>Button Component 606</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
