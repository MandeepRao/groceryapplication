console.log("This is my index js file");

let newsAccordion = document.getElementById('accordionPanelsStayOpenExample');

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://jsonplaceholder.typicode.com/comments`, true);

        
xhr.onload = function () {
    let articles = JSON.parse(this.responseText);

    let newsHtml = "";
    let newarry=articles.map(function(element) {
        let news = `<div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-heading${element.id}">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
          News ${element.id} ${element.name}
          </button>
        </h2>
        <div id="panelsStayOpen-collapse${element.id}" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
          <div class="accordion-body">
            ${element.body}
          </div>
        </div>
      </div>`;;
        newsHtml += news;
    });
    newsAccordion.innerHTML = newsHtml;

}

xhr.send();


