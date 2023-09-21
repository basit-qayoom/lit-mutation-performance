
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-451`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 451<div>
                <input placeholder="Write here" />
                <button>Button Component 451</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
