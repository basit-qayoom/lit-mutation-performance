
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-935`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 935<div>
                <input placeholder="Write here" />
                <button>Button Component 935</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
