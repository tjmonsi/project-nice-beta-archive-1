import {CLCarousel as ReactObject, composeParameter, CLSpinner} from './../../../comp-lib';
import {useDeps, composeAll, compose} from 'mantra-core';
import {composeCarousel} from '../composers';

export const RootCarousel = composeAll(
  compose(composeParameter),
  compose(composeCarousel, CLSpinner),
  useDeps()
)(ReactObject);
