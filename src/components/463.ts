
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-463`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 463<div>
                <input placeholder="Write here" />
                <button>Button Component 463</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
