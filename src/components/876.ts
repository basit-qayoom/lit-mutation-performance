
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-876`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 876<div>
                <input placeholder="Write here" />
                <button>Button Component 876</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
