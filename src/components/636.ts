
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-636`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 636<div>
                <input placeholder="Write here" />
                <button>Button Component 636</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
