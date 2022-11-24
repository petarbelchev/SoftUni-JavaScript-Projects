import page from "../node_modules/page/page.mjs";
import { ctxHandler, onLogout } from "./utility.js";
import { createPage } from "./views/createPage.js";
import { dashboardPage } from "./views/dashboardPage.js";
import { detailsPage, onDelete, onDonate } from "./views/detailsPage.js";
import { onEdit } from "./views/editPage.js";
import { homePage } from "./views/homePage.js";
import { loginPage } from "./views/loginPage.js";
import { registerPage } from "./views/registerPage.js";


page(ctxHandler);
page('/', homePage);
page('/login', loginPage);
page('/logout', onLogout);
page('/register', registerPage);
page('/dashboard', dashboardPage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', onEdit);
page('/delete/:id', onDelete);
page('/donate/:id', onDonate);

page.start();