
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-910`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 910<div>
                <input placeholder="Write here" />
                <button>Button Component 910</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
