
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-1863`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 1863<div>
                <input placeholder="Write here" />
                <button>Button Component 1863</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
