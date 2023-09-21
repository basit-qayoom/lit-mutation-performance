
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-528`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 528<div>
                <input placeholder="Write here" />
                <button>Button Component 528</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
