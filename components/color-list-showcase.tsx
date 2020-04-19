import React from 'react';
import { NextPage } from 'next';
import { connect, ConnectedProps } from 'react-redux';

import { fetchColorList } from '../actions/color-list-actions';
import { IColorPayload, IColorRecord } from '../reducers-types/color-list-types';

type Props = ConnectedProps<typeof connectToRedux>;

class ColorListShowCase extends React.Component<Props> {
  componentDidMount(): void {
    const { fetchColorList } = this.props;
    fetchColorList();
  }

  render(): JSX.Element {
    const { colorList }: {colorList: IColorPayload} = this.props;
    
    return (
      <div>
        <h3>{colorList.title}</h3>
        <ul>
          {colorList.itemsList.map((colorRecord: IColorRecord) => {
            return (
              <li key={colorRecord.id}>{colorRecord.color}</li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  colorList: state.colorList,
});

const connectToRedux = connect(mapStateToProps, {
  fetchColorList,
});

export default connectToRedux(ColorListShowCase);
