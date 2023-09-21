
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-720`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 720<div>
                <input placeholder="Write here" />
                <button>Button Component 720</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
