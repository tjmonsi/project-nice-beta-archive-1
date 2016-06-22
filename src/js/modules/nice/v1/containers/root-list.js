import {CLList as ReactObject, composeParameter, CLSpinnerDiv} from './../../../comp-lib';
import {useDeps, composeAll, compose} from 'mantra-core';
import {composePublish} from '../composers';

export const RootList = composeAll(
  compose(composeParameter),
  compose(composePublish, CLSpinnerDiv),
  useDeps()
)(ReactObject);
