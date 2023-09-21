
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-200`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 200<div>
                <input placeholder="Write here" />
                <button>Button Component 200</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
