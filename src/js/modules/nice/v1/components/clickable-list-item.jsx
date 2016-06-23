import React from 'react';
import {
  CLListItem,
  CLClickableBody
} from './../../../comp-lib';

export class ClickableListItem extends React.Component {
  render() {
    const {
      id,
      title,
      subTitle,
      index
    } = this.props;
    const clickableBodyAttributes = {
      withRipple: true,
      href: `/articles/read/${id}`
    };
    return (
      <CLListItem twoLine={true}>
        <CLClickableBody {...clickableBodyAttributes}>
          {id}
        </CLClickableBody>
      </CLListItem>
    );
  }
}
