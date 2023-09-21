
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-858`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 858<div>
                <input placeholder="Write here" />
                <button>Button Component 858</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
