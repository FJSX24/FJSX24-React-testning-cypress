import Button from "../../src/components/Button";

describe("<Button />", () => {
  it("renders the button with correct text", () => {
    cy.mount(<Button label="Klicka här" />);
    cy.get("button").should("contain", "Klicka här");
  });

  it("calls onClick when clicked", () => {
    const onClickSpy = cy.spy().as("onClickSpy");
    cy.mount(<Button onClick={onClickSpy}>Klicka</Button>);
    cy.get("button").click();
    cy.get("@onClickSpy").should("have.been.calledOnce");
  });
});
