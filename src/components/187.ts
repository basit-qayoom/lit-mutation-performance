
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-187`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 187<div>
                <input placeholder="Write here" />
                <button>Button Component 187</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
