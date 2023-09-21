
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-370`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 370<div>
                <input placeholder="Write here" />
                <button>Button Component 370</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
