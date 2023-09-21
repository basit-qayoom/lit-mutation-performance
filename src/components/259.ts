
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-259`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 259<div>
                <input placeholder="Write here" />
                <button>Button Component 259</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
