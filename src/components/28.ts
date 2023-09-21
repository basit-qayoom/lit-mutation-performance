
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-28`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 28<div>
                <input placeholder="Write here" />
                <button>Button Component 28</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
