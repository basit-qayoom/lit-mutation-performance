
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-604`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 604<div>
                <input placeholder="Write here" />
                <button>Button Component 604</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
