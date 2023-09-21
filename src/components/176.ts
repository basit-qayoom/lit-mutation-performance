
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-176`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 176<div>
                <input placeholder="Write here" />
                <button>Button Component 176</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
