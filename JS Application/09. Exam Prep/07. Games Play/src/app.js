import page from "../node_modules/page/page.mjs";
import { ctxHandler, onLogout } from "./utility.js";
import { allGamesPage } from "./views/allGamesPage.js";
import { createPage } from "./views/createPage.js";
import { detailsPage, onDelete } from "./views/detailsPage.js";
import { onEdit } from "./views/editPage.js";
import { homePage } from "./views/homePage.js";
import { loginPage } from "./views/loginPage.js";
import { registerPage } from "./views/registerPage.js";


page(ctxHandler);
page('/', homePage);
page('/allgames', allGamesPage);
page('/login', loginPage);
page('/logout', onLogout);
page('/register', registerPage);
page('/details/:id', detailsPage);
page('/delete/:id', onDelete);
page('/edit/:id', onEdit);
page('/create', createPage);

page.start();