import fetch from "node-fetch";

export async function handler(event, context) {
  try {
    const body = JSON.parse(event.body);

    const response = await fetch("YOUR_WEB_APP_URL", { // <-- replace this
      method: "POST",
      body: JSON.stringify(body)
    });

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
