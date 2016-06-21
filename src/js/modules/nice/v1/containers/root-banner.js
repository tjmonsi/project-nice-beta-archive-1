import {CLStackGrid as ReactObject, composeParameter, CLSpinnerDiv} from './../../../comp-lib';
import {useDeps, composeAll, compose} from 'mantra-core';
import {composePublish} from '../composers';

export const RootBanner = composeAll(
  compose(composeParameter),
  compose(composePublish, CLSpinnerDiv),
  useDeps()
)(ReactObject);
