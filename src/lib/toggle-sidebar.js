const onToggleSidebar = (leftSideBarHtmlElement) => {
  if (leftSideBarHtmlElement.style.display === "none") {
    leftSideBarHtmlElement.style.display = "block";
  } else {
    leftSideBarHtmlElement.style.display = "none";
  }
};
