
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-375`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 375<div>
                <input placeholder="Write here" />
                <button>Button Component 375</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
