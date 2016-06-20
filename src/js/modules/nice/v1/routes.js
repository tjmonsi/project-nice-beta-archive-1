import * as Components from './../comp-lib';
import root from './pages/root.jsx';

export default (injectDeps, context) => {
  const {CLPage} = Components;
  const PageCtx = injectDeps(CLPage);

  root(PageCtx, context, {Components});
};
