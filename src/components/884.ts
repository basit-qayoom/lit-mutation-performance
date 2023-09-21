
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-884`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 884<div>
                <input placeholder="Write here" />
                <button>Button Component 884</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
