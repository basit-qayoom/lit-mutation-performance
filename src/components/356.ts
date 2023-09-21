
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-356`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 356<div>
                <input placeholder="Write here" />
                <button>Button Component 356</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
