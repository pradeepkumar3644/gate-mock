let questions = [];

async function readPDF() {
  const file = document.getElementById("pdfFile").files[0];
  if (!file) return alert("Upload PDF first");

  const reader = new FileReader();
  reader.onload = async function () {
    const typedarray = new Uint8Array(this.result);
    const pdf = await pdfjsLib.getDocument(typedarray).promise;

    let fullText = "";
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      content.items.forEach(item => {
        fullText += item.str + " ";
      });
      fullText += "\n\n";
    }

    document.getElementById("pdfText").value = fullText;
  };
  reader.readAsArrayBuffer(file);
}

function addQuestion() {
  const q = {
    qno: Number(document.getElementById("qno").value),
    section: document.getElementById("section").value,
    marks: Number(document.getElementById("marks").value),
    negative: Number(document.getElementById("negative").value),
    type: document.getElementById("type").value,
    question: document.getElementById("question").value
  };

  if (q.type !== "NAT") {
    q.options = document
      .getElementById("options")
      .value
      .split("\n")
      .filter(x => x.trim());
  }

  questions.push(q);
  document.getElementById("output").value =
    JSON.stringify(questions, null, 2);
}
