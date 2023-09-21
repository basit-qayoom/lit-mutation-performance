
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-234`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 234<div>
                <input placeholder="Write here" />
                <button>Button Component 234</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
