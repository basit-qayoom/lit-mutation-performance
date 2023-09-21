
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-61`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 61<div>
                <input placeholder="Write here" />
                <button>Button Component 61</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
