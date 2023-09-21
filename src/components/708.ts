
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-708`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 708<div>
                <input placeholder="Write here" />
                <button>Button Component 708</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
