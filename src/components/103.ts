
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-103`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 103<div>
                <input placeholder="Write here" />
                <button>Button Component 103</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
