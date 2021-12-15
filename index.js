// Your code here

function createEmployeeRecord(array){
    const employee = {}
    employee.firstName = array[0]
    employee.familyName = array[1]
    employee.title = array[2] 
    employee.payPerHour = array[3]
    employee.timeInEvents = []
    employee.timeOutEvents = []
    return employee
}

function createEmployeeRecords(array){
    const employees = []
    for (let i = 0; i < array.length; i++){
        employees[i] = createEmployeeRecord(array[i])
        // console.log(employees)
    }
    return employees
}

function createTimeInEvent(employee, date){
    const timeObj = {}
    timeObj.type = "TimeIn"
    timeObj.hour = parseInt(date.substring(11, 15))
    timeObj.date = date.substring(0,10)
    employee.timeInEvents.push(timeObj)
    return employee
}

// let bpRecord = createEmployeeRecord(["Byron", "Poodle", "Mascot", 3])
// createTimeInEvent(bpRecord, "2014-02-28 1400")

function createTimeOutEvent(employee, date){
    const timeObj = {}
    timeObj.type = "TimeOut"
    timeObj.hour = parseInt(date.substring(11, 15))
    timeObj.date = date.substring(0,10)
    employee.timeOutEvents.push(timeObj)
    return employee
}

function hoursWorkedOnDate(obj, date){
    const checkDate = date.substring(0,10)
    const timeIn = obj.timeInEvents
    const timeOut = obj.timeOutEvents
    let hoursIn = 0
    let hoursOut = 0 
    for (let i = 0; i < timeOut.length; i++){
        if (timeOut[i].date === checkDate){
            hoursOut += parseInt(timeOut[i].hour)
        }
    }
    for (let i = 0; i < timeIn.length; i++){
        if (timeIn[i].date === checkDate){
            hoursIn += parseInt(timeIn[i].hour)
        }
    }
    const hoursWorked = parseInt((hoursOut - hoursIn)/100)
    

    return hoursWorked
}

function wagesEarnedOnDate(obj, date){
    const wagesEarned = (hoursWorkedOnDate(obj, date) * parseInt(obj.payPerHour))
    return wagesEarned
}

function allWagesFor(obj){
    const timeIn = obj.timeInEvents
    const timeOut = obj.timeOutEvents
    let hoursIn = 0
    let hoursOut = 0 
    for (let i = 0; i < timeOut.length; i++){
        hoursOut += parseInt(timeOut[i].hour)
    }
    for (let i = 0; i < timeIn.length; i++){
        hoursIn += parseInt(timeIn[i].hour)
    }
    const hoursWorked = parseInt((hoursOut - hoursIn)/100)
    
    const wagesEarned = (hoursWorked * parseInt(obj.payPerHour))
    return wagesEarned
}

function calculatePayroll(array){
    let wageTotal = 0
    for (let i = 0; i < array.length; i++){
        wageTotal += allWagesFor(array[i])
    }
    return wageTotal
}

cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 1000])
        updatedBpRecord = createTimeInEvent(cRecord, "0044-03-15 0900")
        updatedBpRecord = createTimeOutEvent(cRecord, "0044-03-15 1100")
console.log (cRecord)