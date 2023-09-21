
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-675`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 675<div>
                <input placeholder="Write here" />
                <button>Button Component 675</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
