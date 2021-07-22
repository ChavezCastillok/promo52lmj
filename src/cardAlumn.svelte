<script>
  "use strict";

  import ModalImage from "./ModalImage.svelte";

  export let alumno;

  let modalIMG = false;
  const active_modal = () => {
    modalIMG = true;
  };
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
      <img
        src={alumno.profile_picture}
        alt="imagen de perfil"
        on:click={active_modal}
      />
    </figure>
  </article>

  <section class="card-content">
    <p>Seccion: {alumno.seccion.toUpperCase()}</p>
  </section>
</article>

<ModalImage
  src={alumno.profile_picture}
  alt="profile-picture"
  bind:activemodal={modalIMG}
/>

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
