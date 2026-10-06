function renderBreadcrumb(path) {
    const bc = document.getElementById("breadcrumb");
    if (!bc) return;

    bc.innerHTML = path.map((p, i) => {
        const isLast = i === path.length - 1;

        if (isLast || !p.link) {
            return `<span>${p.label}</span>`;
        }

        return `<a href="${p.link}">${p.label}</a>`;
    }).join(" &nbsp;›&nbsp; ");
}