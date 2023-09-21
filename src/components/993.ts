
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-993`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 993<div>
                <input placeholder="Write here" />
                <button>Button Component 993</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
