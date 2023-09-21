
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-377`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 377<div>
                <input placeholder="Write here" />
                <button>Button Component 377</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
