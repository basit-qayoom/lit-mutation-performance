
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-341`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 341<div>
                <input placeholder="Write here" />
                <button>Button Component 341</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
