
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-656`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 656<div>
                <input placeholder="Write here" />
                <button>Button Component 656</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
