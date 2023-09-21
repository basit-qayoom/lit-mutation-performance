
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-241`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 241<div>
                <input placeholder="Write here" />
                <button>Button Component 241</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
