import {CLBanner as ReactObject, composeParameter} from './../../../comp-lib';
import {useDeps, composeAll, compose} from 'mantra-core';
import {composeArticleBannerStackGrid} from '../composers';

export const StackGridBanner = composeAll(
  compose(composeParameter),
  compose(composeArticleBannerStackGrid),
  useDeps()
)(ReactObject);
