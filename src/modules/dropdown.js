function dropdown({
  dropdownSelector,
  selectSelector,
  caretSelector,
  menuSelector,
}) {
  const dropdowns = document.querySelectorAll(dropdownSelector);
  dropdowns.forEach((dropdown) => {
    const select = dropdown.querySelector(selectSelector),
      caret = dropdown.querySelector(caretSelector),
      menu = dropdown.querySelector(menuSelector);
    select.addEventListener("mouseenter", () => {
      caret.classList.add("caret-rotate");
      menu.classList.add("dropdown_menu-open");
      dropdown.addEventListener("mouseleave", () => {
        caret.classList.remove("caret-rotate");
        menu.classList.remove("dropdown_menu-open");
      });
    });
  });
}
export default dropdown;
