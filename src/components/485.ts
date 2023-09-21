
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-485`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 485<div>
                <input placeholder="Write here" />
                <button>Button Component 485</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
