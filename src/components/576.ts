
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-576`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 576<div>
                <input placeholder="Write here" />
                <button>Button Component 576</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
