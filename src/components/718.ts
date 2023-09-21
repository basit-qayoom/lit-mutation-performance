
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-718`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 718<div>
                <input placeholder="Write here" />
                <button>Button Component 718</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
