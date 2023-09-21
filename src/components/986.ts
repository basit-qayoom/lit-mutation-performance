
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-986`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 986<div>
                <input placeholder="Write here" />
                <button>Button Component 986</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
