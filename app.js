"use strict";

// ============ LOAD & INIT APP ============ //
window.addEventListener("load", initApp);

async function initApp() {
  // // Harry Potter
  // const harry = {
  //   name: "Harry Potter",
  //   species: "human",
  //   gender: "male",
  //   house: "Gryffindor",
  //   dateOfBirth: "31-07-1980",
  //   yearOfBirth: 1980,
  //   ancestry: "half-blood",
  //   eyeColour: "green",
  //   hairColour: "black",
  //   wand: "holly,phoenix feather,11",
  //   patronus: "stag",
  //   hogwartsStudent: true,
  //   hogwartsStaff: false,
  //   actor: "Daniel Radcliffe",
  //   alive: true,
  //   image: "http://hp-api.herokuapp.com/images/harry.jpg",
  // };

  // // Hermione Granger
  // const hermione = {
  //   name: "Hermione Granger",
  //   species: "human",
  //   gender: "female",
  //   house: "Gryffindor",
  //   dateOfBirth: "19-09-1979",
  //   yearOfBirth: 1979,
  //   ancestry: "muggleborn",
  //   eyeColour: "brown",
  //   hairColour: "brown",
  //   wand: "vine,dragon heartstring",
  //   patronus: "otter",
  //   hogwartsStudent: true,
  //   hogwartsStaff: false,
  //   actor: "Emma Watson",
  //   alive: true,
  //   image: "http://hp-api.herokuapp.com/images/hermione.jpeg",
  // };

  // // Ron Weasley
  // const ron = {
  //   name: "Ron Weasley",
  //   species: "human",
  //   gender: "male",
  //   house: "Gryffindor",
  //   dateOfBirth: "01-03-1980",
  //   yearOfBirth: 1980,
  //   ancestry: "pure-blood",
  //   eyeColour: "blue",
  //   hairColour: "red",
  //   wand: "willow,unicorn tail-hair,14",
  //   patronus: "Jack Russell terrier",
  //   hogwartsStudent: true,
  //   hogwartsStaff: false,
  //   actor: "Rupert Grint",
  //   alive: true,
  //   image: "http://hp-api.herokuapp.com/images/ron.jpg",
  // };

  const harry = await getCharacter("https://raw.githubusercontent.com/cederdorff/dat-js/main/data/harry.json");
  showCharacter(harry);

  const ron = await getCharacter("https://raw.githubusercontent.com/cederdorff/dat-js/main/data/ron.json");
  showCharacter(ron);

  const hermione = await getCharacter("https://raw.githubusercontent.com/cederdorff/dat-js/main/data/hermione.json");
  showCharacter(hermione);

  const draco = await getCharacter("https://raw.githubusercontent.com/cederdorff/dat-js/main/data/draco.json");
  showCharacter(draco);

  const snape = await getCharacter("https://raw.githubusercontent.com/cederdorff/dat-js/main/data/severus.json");
  showCharacter(snape);

  const profilesTableHeadHTML = /*html*/ `
  <thead>
      <tr>
      <th>Name</th>
        <th>Image</th>
        <th>House</th>
        <th>Date of birth</th>
        <th>Actor</th>
    </tr>
  </thead>
    `;

  // console.log(harry);
  // console.log(ron);
  // console.log(hermione);

  document.querySelector("#characters").insertAdjacentHTML("beforeend", profilesTableHeadHTML);

  // showCharacter(harry);
  // showCharacter(ron);
  // showCharacter(hermione);
}

async function getCharacter(url) {
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

function showCharacter(character) {
  const profilesTableHTML = /*html*/ `
  <tbody>
      <tr>
        <td>${character.name}</td>
        <td><img src="${character.image}"></td>
        <td>${character.house}</td>
        <td>${character.dateOfBirth}</td>
        <td>${character.actor}</td>
      </tr>
  </tbody>
    `;

  document.querySelector("#characters").insertAdjacentHTML("beforeend", profilesTableHTML);

  document.querySelector("#characters tbody:last-child").addEventListener("click", viewCharacter);
  document.querySelector("#dialog-close").addEventListener("click", closeCharacterView);

  function viewCharacter() {
    console.log("character clicked...");

    document.querySelector("#dialog-name").textContent = character.name;
    document.querySelector("#dialog-img").src = character.image;
    document.querySelector("#dialog-species").textContent = character.species;
    document.querySelector("#dialog-gender").textContent = character.gender;
    document.querySelector("#dialog-house").textContent = character.house;
    document.querySelector("#dialog-birthdate").textContent = character.dateOfBirth;
    document.querySelector("#dialog-birthyear").textContent = character.yearOfBirth;
    document.querySelector("#dialog-ancestry").textContent = character.ancestry;
    document.querySelector("#dialog-eyecolor").textContent = character.eyeColour;

    document.querySelector("#dialog-character").showModal();
  }

  function closeCharacterView() {
    document.querySelector("#dialog-character").close();
  }

  /*const profilesHTML =  `
                                <article>
                                    <h2>${potterName}</h2>  
                                    <img src="${potterImage}"></img>
                                    <p>${potterHouse}</p>
                                    <p>${potterDateOfBirth}</p>
                                    <p>${potterActor}</p>
                                </article>
    `;

    document.querySelector("#characters").insertAdjacentHTML("beforeend", profilesHTML)
    */
  /*
    const articleBox = document.createElement("article");
    const profileImage = document.createElement("img");
    const nameHeader = document.createElement("h2");
    const houseParagraph = document.createElement("p");
    const birthDate = document.createElement("p");
    const actor = document.createElement("p");

    nameHeader.textContent = `Name: ${potterName}`;
    profileImage.src = potterImage;
    houseParagraph.textContent = `House: ${potterHouse}`;
    birthDate.textContent = `Date of birth: ${potterDateOfBirth}`;
    actor.textContent = `Actor: ${potterActor}`;

    articleBox.appendChild(nameHeader);
    articleBox.appendChild(profileImage);
    articleBox.appendChild(houseParagraph);
    articleBox.appendChild(birthDate);
    articleBox.appendChild(actor);

    document.querySelector("#characters").appendChild(articleBox);
    */
}
