import {CLGrid as ReactObject, composeParameter, CLSpinnerDiv} from './../../../comp-lib';
import {useDeps, composeAll, compose} from 'mantra-core';
import {composePublish} from '../composers';

export const RootCards = composeAll(
  compose(composeParameter),
  compose(composePublish, CLSpinnerDiv),
  useDeps()
)(ReactObject);
