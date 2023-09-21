
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-116`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 116<div>
                <input placeholder="Write here" />
                <button>Button Component 116</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
