import {CLBanner as ReactObject, composeParameter, CLSpinnerFiller} from './../../../comp-lib';
import {useDeps, composeAll, compose} from 'mantra-core';
import {composeArticleBanner} from '../composers';

export const StackGridBanner = composeAll(
  compose(composeParameter),
  compose(composeArticleBanner, CLSpinnerFiller),
  useDeps()
)(ReactObject);
