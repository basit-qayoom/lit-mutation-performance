
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-5`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 5<div>
                <input placeholder="Write here" />
                <button>Button Component 5</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
