
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-83`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 83<div>
                <input placeholder="Write here" />
                <button>Button Component 83</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
