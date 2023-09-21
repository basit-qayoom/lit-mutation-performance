
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-248`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 248<div>
                <input placeholder="Write here" />
                <button>Button Component 248</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
