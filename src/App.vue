<template>
  <nav>
    <router-link to="/">Accueil</router-link> |
    <router-link to="/carte">Carte</router-link>
    <router-link to="/carte/:parkingId">Carte</router-link>
    <router-link to="/favoris">Favoris</router-link>
  </nav>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap');

#app {
	font-family: 'Red Hat Display', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>
