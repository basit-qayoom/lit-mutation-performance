
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-1166`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 1166<div>
                <input placeholder="Write here" />
                <button>Button Component 1166</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
