
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-304`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 304<div>
                <input placeholder="Write here" />
                <button>Button Component 304</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
