/*
  An accessible tabs component.
  Supports multiple tabs components on the same page.
  

  Accessibility attributes dynamically added and toggled
  ------------------------------------------------------
  role='tablist'
  role='tab'
  role='tabpanel'
  aria-controls='{unique panel id}'
  aria-labelledby='{unique tab id}'
  aria-selected='{bool}'
  
  
  Markup required
  ----------------
  Component container: .tabs-block
  Tabs container: .tab-wrapper
  button: data-target='{unique identifier to match the associated panel}'
  button: data-open='true' to open a specific tab on page load
  panel: .panel .is-d-none
  panel: data-panel='{to match associated button data-target above}'
  
  
  Example markup
  ------------------------
  <section class="tabs-block">
    <ul class="tab-wrapper">
      <li><button data-target="1" data-open="true">Tab title 1</button></li>
      <li><button data-target="2">Tab title 2</button></li>
    </ul>
    <div class="panel-wrapper">
      <div data-panel="1" class="panel is-d-none">
        <p>Panel 1 content</p>
      </div>
      <div data-panel="2" class="panel is-d-none">
        <p>Panel 2 content</p>
      </div>
    </div>
  </section>
*/

class Tabs {
  tabsBlocks: NodeListOf < HTMLElement > ;

  constructor() {
    this.tabsBlocks = document.querySelectorAll(".tabs-block");
  }

  init() {
    if (this.tabsBlocks.length > 0) {
      Array.prototype.forEach.call(this.tabsBlocks, (tabBlock, index) => {
        const tabContainer = tabBlock.querySelector(".tab-wrapper");
        const tabs = tabBlock.querySelectorAll("button");
        const panels = tabBlock.querySelectorAll(".panel");

        tabContainer.setAttribute("role", "tablist");

        Array.prototype.forEach.call(tabs, (tab) => {
          if (tab.dataset.open === "true") this.toggleTabs(tab, panels);

          tab.setAttribute("role", "tab");
          tab.setAttribute(
            "aria-controls",
            `panel-${tab.dataset.target}-block-${index + 1}`
          );

          const associatedPanel = tabBlock.querySelector(
            `[data-panel="${tab.dataset.target}"]`
          );

          if (associatedPanel !== null) {
            associatedPanel.id = `panel-${tab.dataset.target}-block-${
              index + 1
            }`;
            tab.id = `tab-${tab.dataset.target}-block-${index + 1}`;
          }

          tab.addEventListener("click", () => {
            this.toggleTabs(tab, panels);
          });
        });

        Array.prototype.forEach.call(panels, (panel) => {
          const associatedTab = tabBlock.querySelector(
            `[data-target="${panel.dataset.panel}"]`
          );

          panel.setAttribute("role", "tabpanel");
          panel.setAttribute("aria-labelledby", `${associatedTab.id}`);
        });
      });
    }
  }

  toggleTabs = (currentTab, panels) => {
    const tabs = currentTab.closest(".tabs-block").querySelectorAll("button");
    const target = currentTab.dataset.target;

    Array.prototype.forEach.call(tabs, (tab) => {
      if (tab.dataset.target !== target) {
        tab.classList.remove("is-active");
        tab.setAttribute("aria-selected", "false");
      }
    });

    Array.prototype.forEach.call(panels, (panel) => {
      if (panel.dataset.panel !== target) {
        panel.classList.remove("is-active");
      } else {
        panel.classList.add("is-active");
        currentTab.classList.add("is-active");
        currentTab.setAttribute("aria-selected", "true");
      }
    });
  };
}

document.addEventListener("DOMContentLoaded", () => {
  const tabs = new Tabs();
  tabs.init();
});