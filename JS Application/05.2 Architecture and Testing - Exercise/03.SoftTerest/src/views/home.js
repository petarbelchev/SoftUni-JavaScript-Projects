const homeView = document.getElementById('homeView')


export function setHomeView(main) {
    main.replaceChildren(homeView)
}