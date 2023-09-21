
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-861`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 861<div>
                <input placeholder="Write here" />
                <button>Button Component 861</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
