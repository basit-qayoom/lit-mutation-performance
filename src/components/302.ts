
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-302`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 302<div>
                <input placeholder="Write here" />
                <button>Button Component 302</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
