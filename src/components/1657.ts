
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-1657`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 1657<div>
                <input placeholder="Write here" />
                <button>Button Component 1657</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
