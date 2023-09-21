
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-13`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 13<div>
                <input placeholder="Write here" />
                <button>Button Component 13</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
