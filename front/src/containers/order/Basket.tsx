import * as React from 'react';
import styled from "styled-components"
export interface IBasketProps {
}

export interface IBasketState {
}

export default class Basket extends React.Component<IBasketProps, IBasketState> {
  constructor(props: IBasketProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <div>
        <div>장바구니</div>
      </div>
    );
  }
}
