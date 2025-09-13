import fetch from "node-fetch";

export async function handler(event, context) {
  try {
    const body = JSON.parse(event.body);

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxHDGlCqGMBKFC2R8sjRMHT8IFP93oWBBMBaBqrpZYR1wE-diyr-FTxsmwlThoeYNHDDg/exec",
      {
        method: "POST",
        body: JSON.stringify(body)
      }
    );

    const result = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(result)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error: " + err })
    };
  }
}
