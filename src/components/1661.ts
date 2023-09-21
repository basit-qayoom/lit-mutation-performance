
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-1661`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 1661<div>
                <input placeholder="Write here" />
                <button>Button Component 1661</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
