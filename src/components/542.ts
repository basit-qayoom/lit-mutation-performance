
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-542`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 542<div>
                <input placeholder="Write here" />
                <button>Button Component 542</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
