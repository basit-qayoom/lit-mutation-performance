
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-22`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 22<div>
                <input placeholder="Write here" />
                <button>Button Component 22</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
