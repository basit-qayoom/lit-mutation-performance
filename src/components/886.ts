
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-886`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 886<div>
                <input placeholder="Write here" />
                <button>Button Component 886</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
