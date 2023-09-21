
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-728`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 728<div>
                <input placeholder="Write here" />
                <button>Button Component 728</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
