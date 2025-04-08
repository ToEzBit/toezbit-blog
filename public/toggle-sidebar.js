const onToggleSidebar = (leftSideBarHtmlElement) => {
  console.log("xxxxx", leftSideBarHtmlElement.style.display);
  if (leftSideBarHtmlElement.style.display === "none") {
    leftSideBarHtmlElement.style.display = "block";
  } else {
    leftSideBarHtmlElement.style.display = "none";
  }
};
