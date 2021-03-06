/* globals d3 */
import { Model } from '/calliope/node_modules/uki/dist/uki.esm.js';

import Navbar from '/calliope/views/Navbar/Navbar.js';
import Footer from '/calliope/views/Footer/Footer.js';

class BaseController extends Model {
  constructor () {
    super();
    this.navbar = new Navbar(d3.select('header'));
    this.footer = new Footer(d3.select('footer'));
  }
  get currentView () {
    return this.views[this._currentViewIndex];
  }
  set currentView (view) {
    this._currentViewIndex = this.views.indexOf(view);
    for (const otherView of this.views) {
      otherView.d3el.classed('current', otherView === view);
    }
    this.menu.render();
    view.render();
  }
}

export default BaseController;
