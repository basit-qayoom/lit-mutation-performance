
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-917`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 917<div>
                <input placeholder="Write here" />
                <button>Button Component 917</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
