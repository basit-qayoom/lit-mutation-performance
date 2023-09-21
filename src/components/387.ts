
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-387`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 387<div>
                <input placeholder="Write here" />
                <button>Button Component 387</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
