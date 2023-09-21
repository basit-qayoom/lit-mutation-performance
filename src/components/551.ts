
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-551`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 551<div>
                <input placeholder="Write here" />
                <button>Button Component 551</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
