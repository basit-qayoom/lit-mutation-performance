
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-1788`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 1788<div>
                <input placeholder="Write here" />
                <button>Button Component 1788</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
