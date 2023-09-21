
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-373`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 373<div>
                <input placeholder="Write here" />
                <button>Button Component 373</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
