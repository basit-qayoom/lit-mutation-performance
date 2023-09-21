
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-529`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 529<div>
                <input placeholder="Write here" />
                <button>Button Component 529</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
