import * as Components from './../../comp-lib';
import {Nav} from './containers';
import root from './pages/root.jsx';

export default (injectDeps, context) => {
  const {CLPage} = Components;
  const PageCtx = injectDeps(CLPage);

  root(PageCtx, context, {Components, Nav});
};
