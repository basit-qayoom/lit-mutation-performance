
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-448`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 448<div>
                <input placeholder="Write here" />
                <button>Button Component 448</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
