export function getFileData() {
  console.log(process.cwd() + "/app/file.json");

  return fetch(process.cwd() + "/app/file.json")
    .then((response) => response.text())
    .then((file) => JSON.parse(file));
}
