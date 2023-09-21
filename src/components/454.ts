
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-454`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 454<div>
                <input placeholder="Write here" />
                <button>Button Component 454</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
