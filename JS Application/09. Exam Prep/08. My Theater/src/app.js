import page from "../node_modules/page/page.mjs";
import { ctxHandler, onLogout } from "./utility.js";
import { homePage } from "./views/homePage.js";
import { createPage } from "./views/createPage.js";
import { detailsPage, onDelete, onLike } from "./views/detailsPage.js";
import { onEdit } from "./views/editPage.js";
import { loginPage } from "./views/loginPage.js";
import { profilePage } from "./views/profilePage.js";
import { registerPage } from "./views/registerPage.js";


page(ctxHandler);
page('/', homePage);
page('/login', loginPage);
page('/logout', onLogout);
page('/register', registerPage);
page('/details/:id', detailsPage);
page('/delete/:id', onDelete);
page('/edit/:id', onEdit);
page('/profile', profilePage);
page('/create', createPage);
page('/like/:id', onLike);

page.start();