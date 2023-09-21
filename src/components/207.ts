
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-207`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 207<div>
                <input placeholder="Write here" />
                <button>Button Component 207</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
