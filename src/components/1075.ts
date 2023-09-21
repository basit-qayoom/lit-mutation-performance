
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-1075`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 1075<div>
                <input placeholder="Write here" />
                <button>Button Component 1075</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
