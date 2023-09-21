
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-486`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 486<div>
                <input placeholder="Write here" />
                <button>Button Component 486</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
