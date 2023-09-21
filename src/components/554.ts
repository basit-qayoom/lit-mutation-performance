
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-554`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 554<div>
                <input placeholder="Write here" />
                <button>Button Component 554</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
