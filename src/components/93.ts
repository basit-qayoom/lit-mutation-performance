
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-93`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 93<div>
                <input placeholder="Write here" />
                <button>Button Component 93</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
