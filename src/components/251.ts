
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-251`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 251<div>
                <input placeholder="Write here" />
                <button>Button Component 251</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
