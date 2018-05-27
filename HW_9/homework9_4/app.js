$(document).ready(async () => {
  let repoNameLists = (await (await fetch('https://api.github.com/users/pariyathida/repos')).json())
    .filter(repo => repo.fork === false)
    .map(repo => repo.name)
  
  let repoDataLists = repoNameLists.map(async repo => {
    return (await (await fetch(`https://api.github.com/repos/pariyathida/${repo}/commits`)).json())
  })
  console.log(repoDataLists)
  let x = getCommiterCount(repoDataLists)
  console.log(x)
  // console.log(await objToArr(x))
})

function getCommiterCount(repoDataLists) {
  let comiiterCount = {}
  return new Promise((resolve, reject) => {
    repoDataLists.map(async repo => countCommiter(await repo, comiiterCount))
    resolve(comiiterCount)
  })
}

async function objToArr(obj) {
  console.log(await obj)
  return new Promise(async (resolve, reject) => {
    // console.log(await Object.keys(obj))
    let y = Object.keys(obj).map(row => {
      // console.log(row)
      return row
    })
    resolve(y)
  })
}

function countCommiter(repo, commiterCount) {
  if(Array.isArray(repo)) {
    repo
      .filter(committer => {
        return committer.author.login !== 'pariyathida'
      })
      .map(committer => {
        if(commiterCount[committer.author.login] === undefined) {
          commiterCount[committer.author.login] = 0
        }
        commiterCount[committer.author.login] = commiterCount[committer.author.login] + 1 
      })
  }
}

// function buildDataChart() {
//   google.charts.load('current', {'packages':['corechart']});
//   google.charts.setOnLoadCallback(drawChart);
  
//   // Draw the chart and set the chart values
//   function drawChart() {
//     var data = google.visualization.arrayToDataTable([
//     ['Task', 'Hours per Day'],
//     ['Work', 8],
//     ['Friends', 2],
//     ['Eat', 2],
//     ['TV', 3],
//     ['Gym', 2],
//     ['Sleep', 7]
//   ]);
  
//     // Optional; add a title and set the width and height of the chart
//     var options = {'title':'Top Commiter', 'width':400, 'height':300};
  
//     // Display the chart inside the <div> element with id="piechart"
//     var chart = new google.visualization.PieChart(document.getElementById('piechart'));
//     chart.draw(data, options);
//   }
// }