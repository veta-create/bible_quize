document.addEventListener('DOMContentLoaded', () => {
  const facts = document.querySelector(".facts");
  const story = document.querySelector(".story");
  const blockFacts = document.querySelector(".block-facts");
  const blockStory = document.querySelectorAll(".block-story");

  facts.addEventListener("click", function() {
    facts.style.display = "block";
    blockFacts.style.display = "block";
  })

  story.addEventListener("click", function() {
    facts.style.display = "block";
    story.style.display = "block";
    blockFacts.style.display = "block";
    for(let story of blockStory) {
      story.style.display = "block";
    }
  })
})