
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-242`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 242<div>
                <input placeholder="Write here" />
                <button>Button Component 242</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
