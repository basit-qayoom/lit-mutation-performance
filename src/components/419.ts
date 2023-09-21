
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-419`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 419<div>
                <input placeholder="Write here" />
                <button>Button Component 419</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
