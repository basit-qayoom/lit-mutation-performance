
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-527`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 527<div>
                <input placeholder="Write here" />
                <button>Button Component 527</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
