
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-410`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 410<div>
                <input placeholder="Write here" />
                <button>Button Component 410</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
