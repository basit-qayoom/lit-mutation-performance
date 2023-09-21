
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-210`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 210<div>
                <input placeholder="Write here" />
                <button>Button Component 210</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
