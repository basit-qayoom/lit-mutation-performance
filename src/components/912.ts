
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-912`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 912<div>
                <input placeholder="Write here" />
                <button>Button Component 912</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
