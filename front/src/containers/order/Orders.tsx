import * as React from "react";
import styled from "styled-components";
export interface IOrdersProps {}

export interface IOrdersState {}

export default class Orders extends React.Component<
  IOrdersProps,
  IOrdersState
> {
  constructor(props: IOrdersProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <div>
        <div>구매/주문</div>
      </div>
    );
  }
}
