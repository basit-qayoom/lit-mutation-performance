
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-138`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 138<div>
                <input placeholder="Write here" />
                <button>Button Component 138</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
