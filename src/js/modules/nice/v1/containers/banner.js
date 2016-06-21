import {CLBanner as ReactObject, composeParameter} from './../../../comp-lib';
import {useDeps, composeAll, compose} from 'mantra-core';
import {composeArticleBanner} from '../composers';

export const Banner = composeAll(
  compose(composeParameter),
  compose(composeArticleBanner),
  useDeps()
)(ReactObject);
