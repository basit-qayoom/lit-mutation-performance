
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-1036`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 1036<div>
                <input placeholder="Write here" />
                <button>Button Component 1036</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
