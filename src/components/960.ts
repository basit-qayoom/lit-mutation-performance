
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-960`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 960<div>
                <input placeholder="Write here" />
                <button>Button Component 960</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
