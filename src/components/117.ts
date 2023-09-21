
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-117`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 117<div>
                <input placeholder="Write here" />
                <button>Button Component 117</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
