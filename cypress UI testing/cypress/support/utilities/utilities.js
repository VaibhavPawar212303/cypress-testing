class Utilities {
  clickOn(ele) {
    this.getElement(ele).click()
  }

  getElement(ele){
    if (ele.startsWith("/") || ele.startsWith("(")) {
    return  cy.xpath(ele);
    } else {
    return cy.get(ele);
    }
  }
}

export const utilities = new Utilities();
