
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-882`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 882<div>
                <input placeholder="Write here" />
                <button>Button Component 882</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
