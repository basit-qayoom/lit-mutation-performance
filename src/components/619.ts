
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-619`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 619<div>
                <input placeholder="Write here" />
                <button>Button Component 619</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
