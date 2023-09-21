
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-236`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 236<div>
                <input placeholder="Write here" />
                <button>Button Component 236</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
