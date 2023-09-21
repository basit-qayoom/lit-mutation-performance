
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-206`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 206<div>
                <input placeholder="Write here" />
                <button>Button Component 206</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
