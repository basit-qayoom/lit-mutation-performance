
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-1080`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 1080<div>
                <input placeholder="Write here" />
                <button>Button Component 1080</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
