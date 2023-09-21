
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-970`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 970<div>
                <input placeholder="Write here" />
                <button>Button Component 970</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
