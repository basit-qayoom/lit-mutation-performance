
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-1239`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 1239<div>
                <input placeholder="Write here" />
                <button>Button Component 1239</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
