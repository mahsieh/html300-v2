// Code that requires the DOM be loaded should not be run until the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {

  // Find the different forms, and handle their submission
  const webForm1 = document.querySelector('#lesson1-form1')
  const webForm2 = document.querySelector('#lesson1-form2')
  const webForm3 = document.querySelector('#lesson1-form3')
  const webForm4 = document.querySelector('#lesson1-form4')



  webForm1.addEventListener('submit', function (event) {
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data = [0, 65, 7, 104, -3.9, 21.5]

    // process user's input as an integer
    const inputField = document.querySelector('#lesson1-form1 .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // If the user's input was a number, push it into the array and continue
    if (!isNaN(userNumber)) {
      data.push(userNumber)

      // Use array built in sort function to organize the array; ES6 function #1
      data.sort()

      // Create output text explaining what the function did; ES6 template literals, #2
      let output = `Your number was inserted into my array and sorted, resulting in: [${data}].`

      // Send the output back to the spot for it on the page
      document.querySelector('#lesson1-form1 .output').innerHTML = output
    }

    // Clear the form field so the user can try again
    inputField.value = ''
  })

  webForm2.addEventListener('submit', function (event) {
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data = [0, 1, 25, 36, -1, 82]

    // process user's input as an integer
    const inputField = document.querySelector('#lesson1-form2 .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // If the user's input was a number, do stuff
    let output = ""

    if (!isNaN(userNumber)) {

      // Check if every value in our array is smaller than the user's; ES6 arrow function + array function #3 and #4
      if (data.every(value => value < userNumber)) {
        output = `Your number was greater in value than all of the numbers my array ${data}`
      }
      else {
        // create an array with only values that are less than or equal to the user's; ES6 array function #5
        let smallerThan = data.filter(value => value >= userNumber)
        output = `Your number was smaller or equal to some of the numbers I had in [${data}], specifically ${smallerThan}`
      }
      // Send the output back to the spot for it on the page
    }
    // removed number checking on the HTML input for more fun
    else  {
        output = `Dude...<strong>${userInput}</strong> isn't a number!`
    }
    document.querySelector('#lesson1-form2 .output').innerHTML = output

    // Clear the form field so the user can try again
    inputField.value = ''
  })

  webForm3.addEventListener('submit', function (event) {
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // process user's input as an integer
    const inputField = document.querySelector('#lesson1-form3 .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // If the user's input was a number, break it down
    if (!isNaN(userNumber)) {
      // ES6 array functions #6 and #7
      let expandedNumber = Array.from(userInput).join(', ')

      let output = `Your number consists of the following digits: ${expandedNumber}`

      // Output the total to the page- no need to convert the numeric sum back to a string, HTML will just print the number as a string
      document.querySelector('#lesson1-form3 .output').innerHTML = output
    }

    // Clear the form field so the user can try again
    inputField.value = ''
  })

  webForm4.addEventListener('submit', function (event) {
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input

    const inputField = document.querySelector('#lesson1-form4 .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // If the user's input was a number, create an Array based on the number
    if (!isNaN(userNumber)) {
      let sizedArray = Array(userNumber);

      // put in random numbers in the array
      for (let x = 0; x < sizedArray.length; x++) {
        sizedArray[x] = Math.round(Math.random()*100)
      }
      // ES6 for-of loop to print out values to console before displaying on page
      for (let x of sizedArray) {
        console.log(x)
      }
      // Use reduce to sum all the numbers in the data array
      let output = `I decided to make an array the length of your number. It has the following values: ${sizedArray}`
      // Output the total to the page- no need to convert the numeric sum back to a string, HTML will just print the number as a string
      document.querySelector('#lesson1-form4 .output').innerHTML = output
    }

    // Clear the form field so the user can try again
    inputField.value = ''
  })

})