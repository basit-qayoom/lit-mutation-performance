
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-676`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 676<div>
                <input placeholder="Write here" />
                <button>Button Component 676</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
