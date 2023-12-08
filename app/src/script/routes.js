const route = (event) => {
    event = event || window.event;
    window.history.pushState({}, "", event.target.href);
    handlePath();
};

const routes = {
    "/": "index.html",
    "/news": "/view/virtuakeo_news_initial/virtuakeo_news_initial.html",
    "/contato": "https://wa.me/5531995601785?text=Gostaria%20de%20contratar%20seus%20serviços",
};

const handlePath = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("container_home").innerHTML = html;
};

window.onpopstate = handlePath;
window = route;
handlePath();