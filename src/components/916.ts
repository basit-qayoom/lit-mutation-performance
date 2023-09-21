
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-916`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 916<div>
                <input placeholder="Write here" />
                <button>Button Component 916</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
