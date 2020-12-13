import * as React from 'react';

export interface IMyshopProps {
}

export interface IMyshopState {
}

export default class Myshop extends React.Component<IMyshopProps, IMyshopState> {
  constructor(props: IMyshopProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <div>
        <div>
            개인 계정 구매관련
        </div>
      </div>
    );
  }
}
