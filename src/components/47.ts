
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-47`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 47<div>
                <input placeholder="Write here" />
                <button>Button Component 47</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
