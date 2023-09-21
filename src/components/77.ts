
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-77`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 77<div>
                <input placeholder="Write here" />
                <button>Button Component 77</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
