
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-975`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 975<div>
                <input placeholder="Write here" />
                <button>Button Component 975</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
