import {CLBanner as ReactObject, composeParameter, CLSpinner} from './../../../comp-lib';
import {useDeps, composeAll, compose} from 'mantra-core';
import {composeArticleBannerStackGrid} from '../composers';

// console.log(CLSpinner)

export const StackGridBanner = composeAll(
  compose(composeParameter),
  compose(composeArticleBannerStackGrid, CLSpinner),
  useDeps()
)(ReactObject);
