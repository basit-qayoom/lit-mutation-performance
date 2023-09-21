
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-75`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 75<div>
                <input placeholder="Write here" />
                <button>Button Component 75</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
