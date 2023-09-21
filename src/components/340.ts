
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-340`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 340<div>
                <input placeholder="Write here" />
                <button>Button Component 340</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
