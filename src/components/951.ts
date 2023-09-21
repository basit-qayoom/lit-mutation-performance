
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-951`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 951<div>
                <input placeholder="Write here" />
                <button>Button Component 951</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
