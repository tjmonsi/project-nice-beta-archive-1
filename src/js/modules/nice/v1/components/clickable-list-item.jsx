import React from 'react';
import {
  CLListItem,
  CLClickableBody
} from './../../../comp-lib';

export class ClickableListItem extends React.Component {
  render() {
    const {
      id
    } = this.props;
    const clickableBodyAttributes = {
      withRipple: true,
      href: `/articles/read/${id}`
    };
    return (
      <CLListItem>
        <CLClickableBody {...clickableBodyAttributes}>
          {id}
        </CLClickableBody>
      </CLListItem>
    );
  }
}
