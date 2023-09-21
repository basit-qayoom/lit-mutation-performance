
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-222`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 222<div>
                <input placeholder="Write here" />
                <button>Button Component 222</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
