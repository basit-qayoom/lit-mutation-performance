
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-408`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 408<div>
                <input placeholder="Write here" />
                <button>Button Component 408</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
