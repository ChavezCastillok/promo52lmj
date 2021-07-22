<script lang="ts">
  import { alumnos52 } from "./alumnos.js";
  import CardAlumn from "./cardAlumn.svelte";

  export let school;

  interface Alumno {
    fullname: string;
    sex: number;
    seccion: string;
    profile_picture: string;
  }

  enum Genero {
    all,
    men,
    women,
  }
  enum Seccion {
    all,
    a,
    b,
    c,
    d,
  }

  let viewGenero: Genero = Genero.all;
  let viewSeccion: Seccion = Seccion.all;
  let listAlumns: Array<Alumno>;
  let totalMen: number = 0;
  let totalWem: number = 0;
  let sca = { men: 0, wem: 0 };
  let scb = { men: 0, wem: 0 };
  let scc = { men: 0, wem: 0 };
  let scd = { men: 0, wem: 0 };

  let searching: string = "";

  $alumnos52.forEach((a) => {
    if (a.sex == 1) totalMen++;
    else totalWem++;
    switch (a.seccion) {
      case "a":
        a.sex == 1 ? sca.men++ : sca.wem++;
        break;

      case "b":
        a.sex == 1 ? scb.men++ : scb.wem++;
        break;

      case "c":
        a.sex == 1 ? scc.men++ : scc.wem++;
        break;

      case "d":
        a.sex == 1 ? scd.men++ : scd.wem++;
        break;

      default:
        break;
    }
  });

  $: if (viewGenero == Genero.all && viewSeccion == Seccion.all)
    listAlumns = $alumnos52;
  else if (viewGenero == Genero.men && viewSeccion == Seccion.all)
    listAlumns = $alumnos52.filter((alumn) => alumn.sex == 1);
  else if (viewGenero == Genero.women && viewSeccion == Seccion.all)
    listAlumns = $alumnos52.filter((alumn) => alumn.sex == 0);
  else if (viewGenero == Genero.all && viewSeccion == Seccion.a)
    listAlumns = $alumnos52.filter((alumn) => alumn.seccion == "a");
  else if (viewGenero == Genero.all && viewSeccion == Seccion.b)
    listAlumns = $alumnos52.filter((alumn) => alumn.seccion == "b");
  else if (viewGenero == Genero.all && viewSeccion == Seccion.c)
    listAlumns = $alumnos52.filter((alumn) => alumn.seccion == "c");
  else if (viewGenero == Genero.all && viewSeccion == Seccion.d)
    listAlumns = $alumnos52.filter((alumn) => alumn.seccion == "d");
  else if (viewGenero == Genero.men && viewSeccion == Seccion.a)
    listAlumns = $alumnos52.filter(
      (alumn) => alumn.sex == 1 && alumn.seccion == "a"
    );
  else if (viewGenero == Genero.men && viewSeccion == Seccion.b)
    listAlumns = $alumnos52.filter(
      (alumn) => alumn.sex == 1 && alumn.seccion == "b"
    );
  else if (viewGenero == Genero.men && viewSeccion == Seccion.c)
    listAlumns = $alumnos52.filter(
      (alumn) => alumn.sex == 1 && alumn.seccion == "c"
    );
  else if (viewGenero == Genero.men && viewSeccion == Seccion.d)
    listAlumns = $alumnos52.filter(
      (alumn) => alumn.sex == 1 && alumn.seccion == "d"
    );
  else if (viewGenero == Genero.women && viewSeccion == Seccion.a)
    listAlumns = $alumnos52.filter(
      (alumn) => alumn.sex == 0 && alumn.seccion == "a"
    );
  else if (viewGenero == Genero.women && viewSeccion == Seccion.b)
    listAlumns = $alumnos52.filter(
      (alumn) => alumn.sex == 0 && alumn.seccion == "b"
    );
  else if (viewGenero == Genero.women && viewSeccion == Seccion.c)
    listAlumns = $alumnos52.filter(
      (alumn) => alumn.sex == 0 && alumn.seccion == "c"
    );
  else if (viewGenero == Genero.women && viewSeccion == Seccion.d)
    listAlumns = $alumnos52.filter(
      (alumn) => alumn.sex == 0 && alumn.seccion == "d"
    );

  $: if (searching.length > 2) {
    listAlumns = $alumnos52.filter((alumn) =>
      alumn.fullname.toLowerCase().includes(searching.toLowerCase())
    );
  } else if (searching.length < 3) {
    listAlumns = $alumnos52;
  }
</script>

<main class="container">
  <header id="header" class="has-text-centered">
    <h1 class="title">{school}</h1>
    <h1 class="title is-1">
      Promoción <span class="small">200</span>52<span class="small">010</span>
    </h1>
    <h2 class="subtitle">Los mayores accionistas.</h2>
  </header>

  <section class="section">
    <nav class="level">
      <div class="level-item has-text-centered">
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Buscar"
            bind:value={searching}
            on:click={() => (searching = "")}
          />
        </div>
      </div>

      <div class="level-item has-text-centered">
        <p class="subtitle">Sexo:</p>
        <div class="select">
          <select>
            <option on:click={() => (viewGenero = Genero.all)}>Todos</option>
            <option on:click={() => (viewGenero = Genero.men)}>Hombres</option>
            <option on:click={() => (viewGenero = Genero.women)}>Mujeres</option
            >
          </select>
        </div>
      </div>

      <div class="level-item has-text-centered">
        <p class="subtitle">Sección:</p>
        <div class="select">
          <select id="seccion">
            <option on:click={() => (viewSeccion = Seccion.all)}>Todas</option>
            <option on:click={() => (viewSeccion = Seccion.a)}>SC A</option>
            <option on:click={() => (viewSeccion = Seccion.b)}>SC B</option>
            <option on:click={() => (viewSeccion = Seccion.c)}>SC C</option>
            <option on:click={() => (viewSeccion = Seccion.d)}>SC D</option>
          </select>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Total</p>
          <p class="title">{listAlumns.length}</p>
        </div>
      </div>
    </nav>

    <div class="columns is-multiline">
      {#each listAlumns.sort((a, b) => {
        if (a.fullname > b.fullname) return 1;
        else if (a.fullname < b.fullname) return -1;
        else return 0;
      }) as alumno}
        <article class="column is-4-tablet is-3-desktop is-2-fullhd">
          <CardAlumn {alumno} />
        </article>
      {/each}
    </div>
  </section>
  <footer class="footer">
    <div class="columns is-multiline">
      <article
        class="column is-8 is-flex is-justify-content-center is-align-items-center"
      >
        <table class="table is-bordered is-narrow">
          <caption>Promoción 2005-2010 L.M.J.</caption>
          <thead>
            <tr>
              <th />
              <th>SC-A</th>
              <th>SC-B</th>
              <th>SC-C</th>
              <th>SC-D</th>
              <th>Total</th>
              <th>%</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Hombres</th>
              <td>{sca.men}</td>
              <td>{scb.men}</td>
              <td>{scc.men}</td>
              <td>{scd.men}</td>
              <td>{totalMen}</td>
              <td>{((totalMen * 100) / $alumnos52.length).toFixed(2)}</td>
            </tr>
            <tr>
              <th>Mujeres</th>
              <td>{sca.wem}</td>
              <td>{scb.wem}</td>
              <td>{scc.wem}</td>
              <td>{scd.wem}</td>
              <td>{totalWem}</td>
              <td>{((totalWem * 100) / $alumnos52.length).toFixed(2)}</td>
            </tr>
            <tr>
              <th>Totales</th>
              <td>{sca.men + sca.wem}</td>
              <td>{scb.men + scb.wem}</td>
              <td>{scc.men + scc.wem}</td>
              <td>{scd.men + scd.wem}</td>
              <td>{$alumnos52.length}</td>
              <td>100</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3">SC: Segundo de Ciencias</td>
              <td colspan="4">L.M.J. Liceo Militar Jauregui</td>
            </tr>
          </tfoot>
        </table>
        <article class="section content">
          <h3>Otra información:</h3>
          <ul>
            <li>Grupo</li>
            <li>Otros pasajeros</li>
          </ul>
        </article>
      </article>
      <article
        class="column is-flex is-justify-content-center is-align-items-center"
      >
        <p class="has-text-right">
          <small id="dev">
            <span class="icon">
              <ion-icon name="code" />
            </span>
            Dev:
            <a href="https://chavezcastillok.github.io">@chavezcastillok</a>
          </small>
        </p>
      </article>
    </div>
  </footer>
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Tourney:wght@600&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Blinker:wght@300&display=swap");
  main {
    font-family: "Blinker", sans-serif;
    color: ghostwhite;
  }

  .title,
  .subtitle {
    color: ghostwhite;
    font-family: "Tourney", cursive;
  }
  .small {
    font-size: 66%;
  }
  .card .table th {
    text-align: center;
  }
  .table td {
    text-align: right;
  }
  .footer {
    background-color: rgba(248, 248, 255, 0.7);
    color: darkgreen;
  }

  #dev {
    font-family: "Liberation Mono", "Consolas";
  }
  #dev a {
    color: darkslateblue;
  }
  #dev a:hover {
    color: yellow;
    text-transform: uppercase;
    background-color: black;
  }
</style>
