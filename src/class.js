class searchResults {
  constructor() {
    this.input = document.querySelector(".input");
    this.app = document.getElementById("app");
    this.htmlString = `<ul class="list"></ul>`;
    this.handleQuery = this.handleQuery.bind(this);
    this.results = [];

    fetch("https://api.nusmods.com/2018-2019/moduleList.json")
        .then(response => response.json())
        .catch(error => console.log(error))
        .then(jsonArray => {
          this.results = jsonArray;
        })
}

  handleQuery(event) {
  	const searchValue = event.target.value;
  	let searchResults = [];
  	if (searchValue.length > 0){
  		searchResults =     
                            /// combine them all into a single line to execute the function ///
  		                    this.results
  		                    /// 1. returns all the modules ///
  		                    .map(result => result["ModuleCode"] + " " + result["ModuleTitle"]) //jsonModuleObject is the result
  		                    /// 1. returns all the modules ///
  		                    /// 2. returns all the filtered modules ///
  		                    .filter(resultString => resultString.toLowerCase().includes(searchValue.toLowerCase())).slice(0, 5)
  		                    /// 2. returns all the filtered modules ///
  		                    /// 3. returns the value in a readable HTML Format ///
  		                    .map(relevantResult => '<li class="item">' + relevantResult + '</li>')
  		                    /// 3. returns the value in a readable HTML Format ///
  		                    /// 4. combine all the results into a div ///
  		                    .join('')
  		                    /// 4. combine all the results into a div ///

  	                        }
  	                        
  	                        this.htmlString = '<ul class="list">' + searchResults + '</ul>'; // store the list items into an unordered list
                            this.render();
                            /// combine them all into a single line to execute the function ///

  }

  render() {
  	this.input.oninput = this.handleQuery;
    this.app.innerHTML = this.htmlString;
  }
}

const searcher = new searchResults();
searcher.render();
