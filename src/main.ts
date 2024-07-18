document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
   <form id="csvForm">
      <input type="file" id="csvInput" accept=".csv" />
      <input type="submit" value="Submit" />
    </form>
    <textarea name="" id="csvResult" cols="30" rows="10"></textarea>
    <button id="copyButton">Copy to Clipboard</button>
`;

// Now that the elements exist in the DOM, access them
import "./style.css";
const form = document.querySelector("#csvForm")!;
const csvFileInput = document.querySelector("#csvInput")! as HTMLInputElement;
const textArea = document.querySelector("#csvResult")! as HTMLTextAreaElement;
const copyButton = document.querySelector("#copyButton")! as HTMLButtonElement;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const file = csvFileInput.files && csvFileInput.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    const csvArray = csvToArr((e.target as FileReader).result as string, ",");
    console.log("textarea: ", textArea);
    textArea.value = JSON.stringify(csvArray, null, 4);
  };

  if (file) {
    reader.readAsText(file);
  }
});

copyButton.addEventListener("click", function () {
  textArea.select();
  document.execCommand("copy");
  alert("Copied to clipboard!");
});

interface CSVObject {
  [key: string]: string;
}

function csvToArr(stringVal: string, splitter: string): CSVObject[] {
  // Normalize line endings and then split into lines
  const lines = stringVal
    .trim()
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .split("\n");

  // Split each line by the splitter to separate keys from values
  const [keys, ...rest] = lines.map((item) => item.split(splitter));

  // Map the rest of the lines to objects using keys
  const formedArr = rest.map((item) => {
    const object: CSVObject = {};
    keys.forEach((key, index) => {
      object[key] = item[index];
    });
    return object;
  });

  return formedArr;
}
