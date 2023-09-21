
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-333`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 333<div>
                <input placeholder="Write here" />
                <button>Button Component 333</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
