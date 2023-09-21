
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-374`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 374<div>
                <input placeholder="Write here" />
                <button>Button Component 374</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
