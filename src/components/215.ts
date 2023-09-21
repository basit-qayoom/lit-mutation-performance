
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-215`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 215<div>
                <input placeholder="Write here" />
                <button>Button Component 215</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
