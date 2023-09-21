
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-98`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 98<div>
                <input placeholder="Write here" />
                <button>Button Component 98</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
