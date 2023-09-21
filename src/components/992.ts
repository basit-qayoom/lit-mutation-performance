
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-992`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 992<div>
                <input placeholder="Write here" />
                <button>Button Component 992</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
