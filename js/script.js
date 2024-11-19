// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
const form = document.getElementById ('addForm')
const employeeTable = document.getElementById('employees')
const empCount = document.getElementById('empCount')

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let employeeCount = 0


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES  
    const id = document.getElementById('id').value
    const name = document.getElementById('name').value
    const extension = document.getElementById('extension').value
    const email = document.getElementById('email').value
    const department = document.getElementById('department').value

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = employeeTable.insertRow()
   
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellID = row.insertCell()
    let cellName = row.insertCell()
    let cellExt = row.insertCell()
    let cellEmail = row.insertCell()
    let cellDept = row.insertCell()
    let cellDelete = row.insertCell()

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellID.appendChild(document.createTextNode(id))
    cellName.appendChild(document.createTextNode(name))
    cellExt.appendChild(document.createTextNode(extension))
    cellEmail.appendChild(document.createTextNode(email))
    cellDept.appendChild(document.createTextNode(department))

    // CREATE THE DELETE BUTTON
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'
    deleteButton.classList.add('btn', 'btn-danger')
    cellDelete.appendChild(deleteButton)

    // RESET THE FORM
    form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus()

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    employeeCount++
    empCount.textContent = `(${employeeCount})`



    // DELETE EMPLOYEE

    deleteButton.addEventListener('click', (e) => {
        // Confirm the deletion
        if (confirm('Are you sure to delete this employee?')) {
            // Get the row to delete (parentNode of the button's cell)
            let rowToDelete = e.target.parentNode.parentNode
            rowIndex = rowToDelete.rowIndex

            // Delete the row
            employeeTable.deleteRow(rowIndex);

            // Decrement employee count and update the display
            employeeCount--;
            empCount.textContent = `(${employeeCount})`
        }
    })

})