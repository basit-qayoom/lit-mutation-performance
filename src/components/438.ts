
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-438`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 438<div>
                <input placeholder="Write here" />
                <button>Button Component 438</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
