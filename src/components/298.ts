
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-298`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 298<div>
                <input placeholder="Write here" />
                <button>Button Component 298</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
