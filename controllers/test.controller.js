import { spawn } from "child_process";

class TestsController {
  static async runTests(req, res) {
    const testFile = "tests/tp-7.test.js";
    const jestProcess = spawn("npx", ["jest", testFile, "--json", "--silent"], { shell: true });

    let output = "";
    jestProcess.stdout.on("data", (data) => (output += data.toString()));

    jestProcess.on("close", () => {
      try {
        // Filtra la salida para obtener solo JSON
        const jsonStart = output.indexOf("{");
        const jsonEnd = output.lastIndexOf("}");
        if (jsonStart === -1 || jsonEnd === -1) throw new Error("No se encontró JSON en la salida de Jest.");

        const jsonString = output.substring(jsonStart, jsonEnd + 1);
        const result = JSON.parse(jsonString);

        const total = result.numTotalTests;
        const passed = result.numPassedTests;
        const successRate = (passed / total) * 100;
        const isApproved = successRate >= 60;

        const messages = result.testResults.flatMap((test) =>
          test.assertionResults.map((assertion) => ({
            title: assertion.title,
            success: assertion.status === "passed",
          }))
        );

        return res.json({
          successRate: successRate.toFixed(2) + "%",
          isApproved,
          messages,
        });
      } catch (error) {
        return res.json({ error: "Error procesando los resultados", details: error.message });
      }
    });
  }
}

export default TestsController;