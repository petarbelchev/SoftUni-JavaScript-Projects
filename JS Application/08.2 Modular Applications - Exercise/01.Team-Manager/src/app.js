import page from "../node_modules/page/page.mjs";
import { ctxHandler } from "./middlewares/ctxSetter.js";
import { approveMember, joinMember, onLogout, removeMember } from "./util.js";
import { browsePage } from "./views/browsePage.js";
import { createPage } from "./views/createPage.js";
import { detailsPage } from "./views/detailsPage.js";
import { editPage } from "./views/editPage.js";
import { homePage } from './views/homePage.js';
import { loginPage } from "./views/loginPage.js";
import { myTeamsPage } from "./views/myTeamsPage.js";
import { registerPage } from "./views/registerPage.js";



page('/', ctxHandler, homePage);
page('/login', ctxHandler, loginPage);
page('/logout', ctxHandler, onLogout);
page('/register', ctxHandler, registerPage);
page('/teams', ctxHandler, browsePage);
page('/create', ctxHandler, createPage);
page('/details/:id', ctxHandler, detailsPage);
page('/approve/:id', ctxHandler, approveMember);
page('/remove/:teamId/:memId', ctxHandler, removeMember);
page('/myteams', ctxHandler, myTeamsPage);
page('/edit/:id', ctxHandler, editPage);
page('/join/:id', ctxHandler, joinMember);

page.start();