
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-239`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 239<div>
                <input placeholder="Write here" />
                <button>Button Component 239</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
