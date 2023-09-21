
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-487`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 487<div>
                <input placeholder="Write here" />
                <button>Button Component 487</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
