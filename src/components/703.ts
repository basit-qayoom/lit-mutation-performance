
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-703`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 703<div>
                <input placeholder="Write here" />
                <button>Button Component 703</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
