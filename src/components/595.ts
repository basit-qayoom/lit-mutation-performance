
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-595`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 595<div>
                <input placeholder="Write here" />
                <button>Button Component 595</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
