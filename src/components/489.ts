
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-489`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 489<div>
                <input placeholder="Write here" />
                <button>Button Component 489</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
