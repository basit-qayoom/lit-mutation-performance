
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-840`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 840<div>
                <input placeholder="Write here" />
                <button>Button Component 840</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
