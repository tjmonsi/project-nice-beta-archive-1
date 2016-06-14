import React from 'react';
import classNames from 'classnames';
import {classList, prefix} from './../../libs';

export class CLHeaderSpacer extends React.Component {
  render() {
    const {
      classes,
      addClasses,
      id
    } = this.props;
    const defaultClass = `${prefix}-card-supporting-text`;
    const className = classNames(
      'mdl-card__supporting-text',
      defaultClass,
      classList(classes, defaultClass),
      classList(addClasses, defaultClass)
    );
    const attributes = {
      className,
      id
    };
    return (
      <div {...attributes}></div>
    );
  }
}
