
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-618`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 618<div>
                <input placeholder="Write here" />
                <button>Button Component 618</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
