
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-965`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 965<div>
                <input placeholder="Write here" />
                <button>Button Component 965</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
