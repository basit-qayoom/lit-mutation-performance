
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-458`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 458<div>
                <input placeholder="Write here" />
                <button>Button Component 458</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
