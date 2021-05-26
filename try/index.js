// const inner = document.querySelector('.inner');
// const getData = async () => {
//   const req = await fetch('https://yts.mx/api/v2/list_movies.json');
//   const data = await req.json();
//   return data.data.movies;
// };
// const pullData = async () => {
//   let movies = await getData();
//   movies.forEach(movie => {
//     console.log(movie);
//     let div = document.createElement('div');
//     let img = document.createElement('img');
//     let name = document.createElement('p');
//     //append
//     img.src = movie.large_cover_image;
//     name.innerText = movie.title;
//     //
//     div.className = 'col-md-3'
//     div.appendChild(img);
//     div.appendChild(name);
//     inner.appendChild(div);
//   });
// };
// pullData();
// //     // let home = document.createElement('div');
// //     // let away = document.createElement('div');
// //     // div.className = 'fixture';
// //     // home.className = 'home';
// //     // home.className = 'away';
// //     // //logo of teams
// //     // let imgHome = document.createElement('img');
// //     // let imgAway = document.createElement('img');
// //     // imgHome.src = fixture.teams.home.logo;
// //     // imgAway.src = fixture.teams.away.logo;
// //     // //name of teams
// //     // let teamHome = document.createElement('h4');
// //     // let teamAway = document.createElement('h4');
// //     // teamHome.innerText = fixture.teams.home.name;
// //     // teamAway.innerText = fixture.teams.away.name;
// //     // //goals of teams
// //     // let goalHome = document.createElement('h2');
// //     // let goalAway = document.createElement('h2');
// //     // goalHome.innerText = fixture.goals.home;
// //     // goalAway.innerText = fixture.goals.away;

// //     // home.appendChild(imgHome);
// //     // home.appendChild(teamHome);
// //     // home.appendChild(goalHome);
// //     // away.appendChild(imgAway);
// //     // away.appendChild(teamAway);
// //     // away.appendChild(goalAway);

// //     // div.appendChild(home);
// //     // div.appendChild(away);

// //     // // let p = document.createElement('p');
// //     // // p.textContent = country.name;
// //     // // div.appendChild(p);
// //     // // img.src = country.flag;
// //     // // div.appendChild(img);
// //     // inner.appendChild(div);
