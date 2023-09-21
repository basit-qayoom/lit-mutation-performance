
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-857`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 857<div>
                <input placeholder="Write here" />
                <button>Button Component 857</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
