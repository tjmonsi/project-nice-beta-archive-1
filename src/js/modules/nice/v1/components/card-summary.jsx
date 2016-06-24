import React from 'react';
import {
  CLCard,
  CLCardMedia,
  CLCardTitle,
  CLMarkdownRenderer,
  CLCardText,
  CLCardAction,
  CLButton
} from './../../../comp-lib';

export class CardSummary extends React.Component {
  render() {
    const {id, image_url, title, subTitle} = this.props;
    return (
      <CLCard>
        <CLCardMedia src={image_url} />
        <CLCardTitle title={title} />
        <CLCardText>
          <CLMarkdownRenderer markdown={subTitle} />
        </CLCardText>
        <CLCardAction>
          <CLButton label='Read More' href={`/articles/read/${id}`}/>
        </CLCardAction>
      </CLCard>
    );
  }
}
