import page from "../node_modules/page/page.mjs";
import { approveMember, ctxHandler, joinMember, onLogout, removeMember } from "./util.js";
import { browsePage } from "./views/browsePage.js";
import { createPage } from "./views/createPage.js";
import { detailsPage } from "./views/detailsPage.js";
import { editPage } from "./views/editPage.js";
import { homePage } from './views/homePage.js';
import { loginPage } from "./views/loginPage.js";
import { myTeamsPage } from "./views/myTeamsPage.js";
import { registerPage } from "./views/registerPage.js";


page(ctxHandler);

page('/', homePage);
page('/login', loginPage);
page('/logout', onLogout);
page('/register', registerPage);
page('/teams', browsePage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/approve/:id', approveMember);
page('/remove/:teamId/:memId', removeMember);
page('/myteams', myTeamsPage);
page('/edit/:id', editPage);
page('/join/:id', joinMember);

page.start();