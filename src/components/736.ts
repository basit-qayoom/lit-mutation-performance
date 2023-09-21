
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-736`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 736<div>
                <input placeholder="Write here" />
                <button>Button Component 736</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
