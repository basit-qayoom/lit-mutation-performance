
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-1242`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 1242<div>
                <input placeholder="Write here" />
                <button>Button Component 1242</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
