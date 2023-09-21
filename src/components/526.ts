
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-526`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 526<div>
                <input placeholder="Write here" />
                <button>Button Component 526</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
