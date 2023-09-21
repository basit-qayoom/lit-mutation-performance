
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-404`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 404<div>
                <input placeholder="Write here" />
                <button>Button Component 404</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
