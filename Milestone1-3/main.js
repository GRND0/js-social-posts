const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-16"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 125,
        "created": "2021-06-29"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 66,
        "created": "2021-05-9"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 33,
        "created": "2021-06-11"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 56,
        "created": "2021-03-9"
    },


];

posts.forEach((postSingolo) => {
    const contenitore = document.getElementById("container");
    const contenitorePost = document.createElement("div");
    contenitorePost.classList.add("post");
    contenitore.append(contenitorePost);

    const contenitoreHeader = document.createElement("div");
    contenitoreHeader.classList.add("post__header");
    contenitorePost.append(contenitoreHeader);

    const contenitoreMeta = document.createElement("div");
    contenitoreMeta.classList.add("post-meta");
    contenitorePost.append(contenitoreMeta);

    const contenitoreIcone = document.createElement("div")
    contenitoreIcone.classList.add("post-meta__icon")
    contenitoreIcone.innerHTML = `<img class="profile-pic" src="${postSingolo.author.image}" alt="${postSingolo.author.name}"></img>`;
    contenitoreMeta.append(contenitoreIcone);

    const contenitoreMetaData = document.createElement("div");
    contenitoreMetaData.classList.add("post-meta__data");
    contenitoreMetaData.innerHTML = `<div class="post-meta__author"> ${postSingolo.author.name} </div> <div class="post-meta__time">${postSingolo.created}</div> `
    contenitoreMeta.append(contenitoreMetaData);

    const contenitoreTesto = document.createElement("div");
    contenitoreTesto.classList.add("post__text");
    contenitoreTesto.innerHTML = `${postSingolo.content}`;
    contenitorePost.append(contenitoreTesto);

    const contenitoreImmagine = document.createElement("div");
    contenitoreImmagine.classList.add("post__image");
    contenitoreImmagine.innerHTML = `<img src="${postSingolo.media}" alt="">`;
    contenitorePost.append(contenitoreImmagine);

    const contenitoreFooter = document.createElement("div");
    contenitoreFooter.classList.add("post__footer");
    contenitorePost.append(contenitoreFooter);

    const contenitoreLikes = document.createElement("div");
    contenitoreLikes.classList.add("likes","js-likes");
    contenitorePost.append(contenitoreLikes);

    const contenitoreCta = document.createElement("div");
    contenitoreCta.classList.add("likes__cta");
    contenitoreCta.innerHTML = `<a class="like-button js-like-button" href="#" data-postid="${postSingolo.id}">
    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
    <span class="like-button__label">Mi Piace</span> </a> `
    contenitoreLikes.append(contenitoreCta) ;

    const containerContoLike = document.createElement("div");
    containerContoLike.classList.add("likes__counter") ;
    containerContoLike.innerHTML = `Piace a <b id="like-counter-${postSingolo.id}" class="js-likes-counter">${postSingolo.likes}</b> persone` ;
    contenitoreLikes.append(containerContoLike) ;

}) ;


/*
    seleziono tutti i tag a che hanno classe like-button
    scorro tutti i tag presi dal selettore
    aggiungi su ogni tag un listener per il click
    nella funzione hai accesso al tag a specifico => mi ricavo data-postid per selezionare il tag b dove cambiare il contenuto
     cambi classe per colorarlo e aumenti numero di like
*/


const pulsanteLike = document.getElementsByClassName("like-button") ;
    for (let i = 0; i < pulsanteLike.length; i++) {
        pulsanteLike[i].addEventListener("click", function()  {
            this.classList.add("like-button--liked");
            const postCliccato = posts[i]; 
            const idPostCliccato = postCliccato.id;
            const contatoreLike = document.getElementById(`like.counter-${idPostCliccato}`);
            let numeroLike = parseInt(contatoreLike.textContent) ;
            numeroLike = numeroLike + 1 ;
            contatoreLike.innerHTML = numeroLike ;

            postCliccato.push(idPostCliccato); 

        })
    }

