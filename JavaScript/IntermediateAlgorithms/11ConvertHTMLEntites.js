function convertHTML(str) {
    const htmlEntities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    };
    
  
    return str
      .split("") // seperate it to an array of characters.
      .map(entity => htmlEntities[entity] || entity)
      .join(""); // join the array together.
  }
  
  convertHTML("Dolce & Gabbana");

