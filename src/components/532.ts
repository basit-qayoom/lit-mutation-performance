
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-532`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 532<div>
                <input placeholder="Write here" />
                <button>Button Component 532</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
