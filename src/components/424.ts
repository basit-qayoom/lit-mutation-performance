
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-424`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 424<div>
                <input placeholder="Write here" />
                <button>Button Component 424</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
