
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-460`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 460<div>
                <input placeholder="Write here" />
                <button>Button Component 460</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
