
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-713`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 713<div>
                <input placeholder="Write here" />
                <button>Button Component 713</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
