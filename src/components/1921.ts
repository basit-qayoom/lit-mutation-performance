
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-1921`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 1921<div>
                <input placeholder="Write here" />
                <button>Button Component 1921</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
