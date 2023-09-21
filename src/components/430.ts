
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-430`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 430<div>
                <input placeholder="Write here" />
                <button>Button Component 430</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
