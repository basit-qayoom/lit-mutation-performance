
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-218`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 218<div>
                <input placeholder="Write here" />
                <button>Button Component 218</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
