
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-270`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 270<div>
                <input placeholder="Write here" />
                <button>Button Component 270</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
