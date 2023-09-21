
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-201`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 201<div>
                <input placeholder="Write here" />
                <button>Button Component 201</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
