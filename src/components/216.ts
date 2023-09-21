
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-216`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 216<div>
                <input placeholder="Write here" />
                <button>Button Component 216</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
