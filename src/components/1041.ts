
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-1041`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 1041<div>
                <input placeholder="Write here" />
                <button>Button Component 1041</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
