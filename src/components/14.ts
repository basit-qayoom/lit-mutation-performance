
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-14`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 14<div>
                <input placeholder="Write here" />
                <button>Button Component 14</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
