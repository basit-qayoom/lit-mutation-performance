
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-700`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 700<div>
                <input placeholder="Write here" />
                <button>Button Component 700</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
