
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-243`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 243<div>
                <input placeholder="Write here" />
                <button>Button Component 243</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
