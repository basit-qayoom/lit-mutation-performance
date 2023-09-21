
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-181`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 181<div>
                <input placeholder="Write here" />
                <button>Button Component 181</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
