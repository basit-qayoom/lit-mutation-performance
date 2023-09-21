
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-357`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 357<div>
                <input placeholder="Write here" />
                <button>Button Component 357</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
