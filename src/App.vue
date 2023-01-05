<template>
  <nav class="menu">
    <img width="140" src="./assets/logo-tan.png" alt="Logo Vite mon parking">
    <ul>
      <li><router-link to="/">Accueil</router-link></li>
      <li> <router-link to="/carte">Carte</router-link></li>
      <li><router-link to="/favoris">Favoris</router-link></li>
    </ul>
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
.menu {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-radius: 10px;
  box-shadow: 0 -1px 4px 0 rgb(26 26 26 / 8%), 0 4px 8px 0 rgb(26 26 26 / 12%);
  max-width: 550px;
  padding: 10px;
  margin: 30px auto;
}
.menu ul {
  display: flex;
  list-style-type: none;
  font-size: 25px;
  font-weight: 500;
}
.menu a {
  text-decoration: none;
  color: black;
  padding: 0 10px;
}
.menu a:hover {
  color: green;
}
</style>
