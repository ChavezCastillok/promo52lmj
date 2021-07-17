<script>
  "use strict";

  export let alumno;
</script>

<article class="card">
  <header class="card-header">
    <h3 class="card-header-title {alumno.sex == 1 ? 'man' : 'wom'}">
      <span class="icon mr-2">
        {#if alumno.sex == 1}
          <ion-icon name="male" size="large" />
        {:else}
          <ion-icon name="female" size="large" />
        {/if}
      </span>
      {alumno.fullname}
    </h3>
  </header>
  <article class="card-image">
    <figure class="image is-3by4">
      <img src={alumno.profile_picture} alt="imagen de perfil" />
    </figure>
  </article>

  <section class="card-content">
    <p>Seccion: {alumno.seccion.toUpperCase()}</p>
  </section>
</article>

<style>
  .card {
    background-color: rgba(248, 248, 255, 0.6);
  }
  .man,
  .wom {
    text-transform: capitalize;
    font-size: 1.1rem;
  }
  .man {
    color: darkblue;
  }
  .wom {
    color: darkviolet;
  }
</style>
