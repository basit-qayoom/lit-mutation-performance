
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-63`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 63<div>
                <input placeholder="Write here" />
                <button>Button Component 63</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
