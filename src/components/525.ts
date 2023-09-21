
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-525`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 525<div>
                <input placeholder="Write here" />
                <button>Button Component 525</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
