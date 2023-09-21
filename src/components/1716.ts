
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-1716`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 1716<div>
                <input placeholder="Write here" />
                <button>Button Component 1716</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
