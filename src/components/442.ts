
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-442`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 442<div>
                <input placeholder="Write here" />
                <button>Button Component 442</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
