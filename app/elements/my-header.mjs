export default function MyHeader({html}) {
  return html`
		<style scope="global">
/* ----- THEME ----- */
  @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@300&display=swap');

  body {
    font-family: 'Comic Neue', cursive;
  }

  .parent {
    display: grid;
    grid-template-columns: 0.1fr 1.5fr 0.1fr;
    grid-template-rows: auto auto auto;
    height: 80vh;
  }

  .content {
    grid-area: 1 / 2 / 1 / 2;
    place-self: center stretch;
  }

  footer {
    grid-area: 3 / 2 / 3 / 2;
    place-self: end center;
    padding: 20px;
    font-size: 3vh;
  }

  .header {
    background-color: fuchsia;
    font-family: 'Comic Neue', cursive;
    font-weight: 500;
    /* we set up fallback font-size */
    font-size: 3.5em;
    font-size: 7vw;
    box-shadow: 10px 5px 0px 0px;
    padding: 3px;
    text-align: center;
  }

  .description {
    padding: 20px;
    font-size: 2vw;
    text-align: center;
  }

  .link-container {
    display: flex;
    justify-content: space-around;
    padding: 10px;
  }

  .link {
    font-size: 5vw;
    box-shadow: 10px 5px 0px 0px;
    background-color: greenyellow;
    padding: 2px;
    color: black;
    text-decoration: none;
  }

  .link:hover {
    background-color: fuchsia;
    box-shadow: 10px 5px 0px 0px greenyellow;
  }

  .list-form {
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
  }

  .list-form button {
    font-size: 4vw;
    box-shadow: 10px 5px 0px 0px;
    background-color: greenyellow;
    margin: 10px;
    padding: 2px;
    color: black;
    text-decoration: none;
  }

  .item-text {
    font-size: 2vw;
    text-align: left;
    margin-right: 4vw;
  }

  .item-text>input {
    box-shadow: 10px 5px 0px 0px;
    width: 60vh;
    height: 2vh;
    font-size: 2vh;
  }

  .item-text>label {
    font-size: 1.5vh;
    font-weight: bold;
  }

  .text-input {
    display: block;
  }

  .green-body {
    background-color: greenyellow;
    box-shadow: 10px 5px 0px 0px;
    min-height: 50vw;
  }

  ul.list-list {
    font-size: 2vw;
  }

  ul.list-list>li {
    list-style-type: none;
  }

  ul.list-list>li>a {
    color: OrangeRed;
    text-decoration: none;
    font-weight: 600;
  }

  ul.list-display>li {
    list-style-type: none;
    font-weight: 600;
    font-size: 2.5vh;
  }

  @media only screen and (min-width: 600px) {}
		</style>
		<header>
		</header>
	`
}
