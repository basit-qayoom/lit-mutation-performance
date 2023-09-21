
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-455`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 455<div>
                <input placeholder="Write here" />
                <button>Button Component 455</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
