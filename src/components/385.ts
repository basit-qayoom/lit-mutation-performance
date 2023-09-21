
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-385`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 385<div>
                <input placeholder="Write here" />
                <button>Button Component 385</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;