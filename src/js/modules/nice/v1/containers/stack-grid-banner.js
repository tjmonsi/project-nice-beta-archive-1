import {CLBanner as ReactObject, composeParameter, CLSpinnerFiller} from './../../../comp-lib';
import {useDeps, composeAll, compose} from 'mantra-core';
import {composeArticleBannerStackGrid} from '../composers';

export const StackGridBanner = composeAll(
  compose(composeParameter),
  compose(composeArticleBannerStackGrid, CLSpinnerFiller),
  useDeps()
)(ReactObject);
