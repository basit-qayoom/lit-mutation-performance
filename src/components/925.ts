
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-925`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 925<div>
                <input placeholder="Write here" />
                <button>Button Component 925</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
