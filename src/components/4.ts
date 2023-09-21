
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-4`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 4<div>
                <input placeholder="Write here" />
                <button>Button Component 4</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
