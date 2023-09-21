
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-635`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 635<div>
                <input placeholder="Write here" />
                <button>Button Component 635</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
