
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-663`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 663<div>
                <input placeholder="Write here" />
                <button>Button Component 663</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
