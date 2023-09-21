
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-804`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 804<div>
                <input placeholder="Write here" />
                <button>Button Component 804</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
