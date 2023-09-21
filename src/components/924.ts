
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-924`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 924<div>
                <input placeholder="Write here" />
                <button>Button Component 924</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
