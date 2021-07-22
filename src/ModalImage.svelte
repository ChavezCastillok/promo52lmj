<script>
  export let src = "";
  export let alt = "";
  export let activemodal = false;

  const closeModal = () => (activemodal = false);
</script>

{#if activemodal}
  <div class="modal is-active">
    <div class="modal-background" on:click={closeModal} />
    <div class="modal-content">
      <p class="image is-3by4">
        <img {src} {alt} />
      </p>
    </div>
    <button
      class="modal-close is-large"
      aria-label="close"
      on:click={closeModal}
    />
  </div>
{/if}
