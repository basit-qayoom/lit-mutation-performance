
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-246`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 246<div>
                <input placeholder="Write here" />
                <button>Button Component 246</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
