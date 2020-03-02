export default function readFile(fileName: string) {
    return fetch(fileName)
        .then(response => response.text())
}
