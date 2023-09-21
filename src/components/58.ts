
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-58`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 58<div>
                <input placeholder="Write here" />
                <button>Button Component 58</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
