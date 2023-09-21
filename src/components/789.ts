
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
@customElement(`pw-789`)
class PWElement extends LitElement {
  override render() {
    return html`
        <div>
            <hr />
                <div>Component: 789<div>
                <input placeholder="Write here" />
                <button>Button Component 789</button>
            <hr />
        </div>
    `;
  }
}

export default PWElement;
