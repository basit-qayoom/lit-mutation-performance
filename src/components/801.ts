
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-801`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 801<div>
                <input placeholder="Write here" />
                <button>Button Component 801</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
