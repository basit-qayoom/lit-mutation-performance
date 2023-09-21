
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-21`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 21<div>
                <input placeholder="Write here" />
                <button>Button Component 21</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
