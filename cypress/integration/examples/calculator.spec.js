describe("Calculator Test", ()=>{
    it("Navigate to site", ()=>{
        cy.visit("http://localhost:3000/")
    })

    it("Test plus operator", ()=>{
        cy.get("input[id=txtInput1]").type("4")
        cy.get("input[id=txtOperator]").type("+")
        cy.get("input[id=txtInput2]").type("6")
        cy.get("button[id=btnCalculate").click()
        cy.get("#divResult").should('have.text',"10")
    })

    it("Clear the fields", ()=>{
        cy.get("button[id=btnClear").click()
    });

    it("Test times operator", ()=>{
        cy.get("input[id=txtInput1]").type("12")
        cy.get("input[id=txtOperator]").type("*")
        cy.get("input[id=txtInput2]").type("13")
        cy.get("button[id=btnCalculate").click()
        cy.get("#divResult").should('have.text',"156")
    })

    it("Test memory button", ()=>{
        cy.get("button[id=btnMemory]").click()
    })

    it("Clear the fields", ()=>{
        cy.get("button[id=btnClear").click()
    });

    it("Test division operator", ()=>{
        cy.get("input[id=txtInput1]").type("120")
        cy.get("input[id=txtOperator]").type("/")
        cy.get("input[id=txtInput2]").type("5")
        cy.get("button[id=btnCalculate").click()
        cy.get("#divResult").should('have.text',"24")
    })

    it("Test Memory Read", ()=>{
        cy.get("input[id=txtInput1]").focus()
        cy.get("button[id=btnRead").click()
        cy.get("input[id=txtInput1]").should("have.value", "156")
        cy.get("input[id=txtInput2]").focus()
        cy.get("button[id=btnRead").click()
        cy.get("input[id=txtInput2]").should("have.value", "156")
        cy.get("button[id=btnCalculate").click()
        cy.get("#divResult").should('have.text',"1")
    })
});