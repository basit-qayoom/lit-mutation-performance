
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-285`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 285<div>
                <input placeholder="Write here" />
                <button>Button Component 285</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
