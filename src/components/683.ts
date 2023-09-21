
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-683`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 683<div>
                <input placeholder="Write here" />
                <button>Button Component 683</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
