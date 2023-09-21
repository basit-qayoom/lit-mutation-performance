
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-74`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 74<div>
                <input placeholder="Write here" />
                <button>Button Component 74</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
