
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-841`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 841<div>
                <input placeholder="Write here" />
                <button>Button Component 841</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
