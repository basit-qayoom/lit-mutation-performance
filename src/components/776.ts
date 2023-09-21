
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-776`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 776<div>
                <input placeholder="Write here" />
                <button>Button Component 776</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
