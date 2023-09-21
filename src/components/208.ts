
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-208`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 208<div>
                <input placeholder="Write here" />
                <button>Button Component 208</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
