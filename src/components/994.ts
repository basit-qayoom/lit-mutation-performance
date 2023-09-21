
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-994`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 994<div>
                <input placeholder="Write here" />
                <button>Button Component 994</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
