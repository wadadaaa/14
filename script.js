document.addEventListener("DOMContentLoaded", function () {
    const app = document.getElementById("app");
    let noCount = 0;
    let isExcited = false;
  
    function updateUI() {
      app.innerHTML = ""; // Clear the current content
      if (isExcited) {
        app.innerHTML = `
                  <h1 class="text-4xl font-bold text-gray-800 mb-6">Good I Love you 🤗</h1>
                  <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="Bear Kiss" />
              `;
      } else {
        const phrases = [
          "No",
          "Are you sure?",
          "Really sure?",
          "Think again!",
          "Last chance!",
          "Surely not?",
          "You might regret this!",
          "Give it another thought!",
          "Are you absolutely certain?",
          "This could be a mistake!",
          "Have a heart!",
          "Don't be so cold!",
          "Change of heart?",
          "Wouldn't you reconsider?",
          "Is that your final answer?",
          "You're breaking my heart ;(",
        ];
        const buttonText = phrases[Math.min(noCount, phrases.length - 1)];
  
        app.innerHTML = `
                  <h1 class="text-4xl font-bold text-gray-800 mb-6 title">Svetochka! <br> 
                  Will you be my valentine?</h1>
                  <p class="text-xl text-gray-600 mb-10">Choose wisely, I can't wait to hear from you!</p>
                  <img class="h-[200px]" src="https://media.tenor.com/vmvaMX3F-3IAAAAi/hehehehe.gif" alt="Bear with Roses" />
                  <div class="flex space-x-4 buttons">
                  <button id="yes-button" class="yes-button">Yes</button>
                  <button id="no-button" class="no-button">${buttonText}</button>
                  </div>
              `;
  
        document
          .getElementById("yes-button")
          .addEventListener("click", handleClickYes);
        document
          .getElementById("no-button")
          .addEventListener("click", handleClickNo);
      }
    }
  
    function handleClickNo() {
      noCount++;
      updateUI(); // Re-render the UI with updated state
    }
  
    function handleClickYes() {
      isExcited = true;
      updateUI(); // Re-render the UI with updated state
    }
  
    updateUI(); // Initial render
  });
  