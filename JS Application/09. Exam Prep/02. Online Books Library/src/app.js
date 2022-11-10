import page from "../node_modules/page/page.mjs";
import { ctxHandler, onLogout } from "./utility.js";
import { dashboardPage } from "./views/dashboardPage.js";
import { addbookPage } from "./views/addbookPage.js";
import { detailsPage, onDelete, onLike } from "./views/detailsPage.js";
import { editPage } from "./views/editPage.js";
import { loginPage } from "./views/loginPage.js";
import { myBooksPage } from "./views/myBooksPage.js";
import { registerPage } from "./views/registerPage.js";


page(ctxHandler);
page('/', dashboardPage);
page('/login', loginPage);
page('/logout', onLogout);
page('/register', registerPage);
page('/details/:id', detailsPage);
page('/delete/:id', onDelete);
page('/edit/:id', editPage);
page('/mybooks', myBooksPage);
page('/addbook', addbookPage);
page('/like/:id', onLike);

page.start();