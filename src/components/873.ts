
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-873`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 873<div>
                <input placeholder="Write here" />
                <button>Button Component 873</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
