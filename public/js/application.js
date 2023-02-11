const entries = document.querySelector('.entries');
const entry = document.querySelector('.entry');
const form = document.querySelector('#form');

entries?.addEventListener('click', async (event) => {
  event.preventDefault();

  if (event.target.attributes.name.value === 'delete') {
    const { id } = event.target;

    try {
      const response = await fetch(`/entry/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(),
      });

      if (response.status === 200) {
        entries.removeChild(entry);
      }
    } catch (error) {
      console.log(error);
    }
  }
});

entries?.addEventListener('click', async (event) => {
  event.preventDefault();

  if (event.target.attributes.name.value === 'edit') {
    const { id } = event.target;

    const body = document.querySelector('body');
    body.innerHTML = `
    <h1>Edit the Entry</h1>

      <main class="form-wrapper" role="main">
        <form id="form">
          <label htmlFor="singer_name_input">Singer name:</label>
          <input id="singer_name_input" name="entry[singer]" type="text" value={entry.singer} />

          <label htmlFor="songTitle_input">Song title:</label>
          <input id="songTitle_input" name="entry[songTitle]" type="text" value={entry.songTitle} />

          <input type="submit" value="Update Entry" class="button" />
        </form>
      </main>
    `;
  }
});

form?.addEventListener('submit', async (event) => {
  event.preventDefault();

  // if (event.target.attributes.name.value === 'delete') {
  // const { id } = event.target;
  console.log(event.target);

  //   try {
  //     const response = await fetch(`/entry/${id}`, {
  //       method: 'DELETE',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(),
  //     });

  //     if (response.status === 200) {
  //       entries.removeChild(entry);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
});
