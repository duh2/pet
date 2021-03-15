export function getJSONdata() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3001/products", true);
  xhr.send();

  xhr.onreadystatechange = () => {
    if (xhr.readyState !== 4) {
      return false;
    }
    if (xhr.status !== 200) {
      console.log(xhr.status + ": " + xhr.statusText);
    } else {
      // @ts-ignore
      this.setState({
        data: JSON.parse(xhr.responseText),
        isLoaded: true,
      });
    }
  };
}
