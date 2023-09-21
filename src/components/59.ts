
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-59`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 59<div>
                <input placeholder="Write here" />
                <button>Button Component 59</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
