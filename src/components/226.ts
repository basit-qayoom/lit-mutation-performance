
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-226`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 226<div>
                <input placeholder="Write here" />
                <button>Button Component 226</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
