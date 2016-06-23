import React from 'react';
import {
  CLCard
} from './../../../comp-lib';

export class CardSummary extends React.Component {
  render() {
    console.log(this.props)
    return (
      <CLCard>
        Card
      </CLCard>
    );
  }
}
