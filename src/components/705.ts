
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-705`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 705<div>
                <input placeholder="Write here" />
                <button>Button Component 705</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
