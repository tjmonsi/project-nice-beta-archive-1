import {composeParameter, CLSpinnerFiller} from './../../../comp-lib';
import {CardSummary as ReactObject} from './../components/card-summary.jsx';
import {useDeps, composeAll, compose} from 'mantra-core';
import {composeArticle} from '../composers';

export const RootCard = composeAll(
  compose(composeParameter),
  compose(composeArticle, CLSpinnerFiller),
  useDeps()
)(ReactObject);
