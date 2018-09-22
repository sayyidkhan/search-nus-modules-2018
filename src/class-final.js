class GoogleSearch {
  constructor() {
    this.input = document.querySelector(".input");
    this.app = document.getElementById("app");
    this.htmlString = `<ul class="list"></ul>`;
    this.onInput = this.onInput.bind(this);

    fetch("https://api.nusmods.com/2018-2019/moduleList.json")
        .then(response => response.json())
        .catch(error => console.log(error))
        .then(jsonArray => {
          this.results = jsonArray;
        })
  }

  onInput(event) {
    const searchValue = event.target.value;
    let moduleNames = [];
    if (searchValue.length > 0) {
      moduleNames = this.results
        .map(result => result["ModuleCode"] + ' ' + result["ModuleTitle"])
        .filter(function(result) {
          return result.includes(searchValue);
        })
        .map(function(result) {
          return `<li class="item">` + result + `</li>`;
        })
        .join(``);
    }
    this.htmlString = `<ul class="list">` + moduleNames + `</ul>`;
    this.render();
  }

  render() {
    this.input.oninput = this.onInput;
    this.app.innerHTML = this.htmlString;
  }
}


const searcher = new GoogleSearch();
searcher.render();