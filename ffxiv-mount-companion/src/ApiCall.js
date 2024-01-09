export const retrieveMounts = async () => {
  try {
    const response = await fetch("https://ffxivcollect.com/api/mounts/", {
      headers: {
        "x-api-key": "HrfzwxfXfSrQ2fWp8HTBRg==iDd4R6C0zzz6jRuD",
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Oops! Something went wrong");
    }

    const responseData = await response.json();
    const nestedArray = responseData.results;

    if (!Array.isArray(nestedArray)) {
      throw new Error("Invalid data format from API: expected nested array");
    }

    return nestedArray;
  } catch (error) {
    if (error.message === "Failed to fetch") {
      throw new Error("Network error: Please check your internet connection");
    }
    throw error;
  }
};
