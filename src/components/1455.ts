
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-1455`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 1455<div>
                <input placeholder="Write here" />
                <button>Button Component 1455</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
