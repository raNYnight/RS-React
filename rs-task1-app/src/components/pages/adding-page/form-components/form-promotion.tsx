import { Component, createRef, ReactNode } from 'react';

class FormPromotion extends Component {
  promotionInputRef: React.RefObject<HTMLInputElement>;

  constructor(props: object) {
    super(props);
    this.promotionInputRef = createRef();
  }

  render(): ReactNode {
    return (
      <div className="field-block name-block">
        <label
          htmlFor="promotion-switch"
          className="label-block"
        >
          Employee promotion:
        </label>
        <input
          ref={this.promotionInputRef}
          type="checkbox"
          id="promotion-switch"
          name="promotion"
          value="true"
        />
      </div>
    );
  }
}

export default FormPromotion;
