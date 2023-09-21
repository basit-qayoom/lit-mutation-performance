
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-622`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 622<div>
                <input placeholder="Write here" />
                <button>Button Component 622</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
