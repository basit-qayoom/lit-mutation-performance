
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-137`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 137<div>
                <input placeholder="Write here" />
                <button>Button Component 137</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
