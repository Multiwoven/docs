const theme = {
  plain: {
    color: "#f8f8f2", // Light color for contrast with dark background
    backgroundColor: "#2D1339", // Keeping the dark background
  },
  styles: [
    {
      types: ["changed"],
      style: {
        color: "#e63d2d", // Your primary color
        fontStyle: "italic",
      },
    },
    {
      types: ["deleted"],
      style: {
        color: "rgba(239, 83, 80, 0.7)", // Slightly more vibrant red
        fontStyle: "italic",
      },
    },
    {
      types: ["inserted", "attr-name"],
      style: {
        color: "#a8e6cf", // Soft green for readability
        fontStyle: "italic",
      },
    },
    {
      types: ["comment"],
      style: {
        color: "rgba(255, 255, 255, 0.6)", // Slightly brighter for readability
      },
    },
    {
      types: ["string", "url"],
      style: {
        color: "#ffcc5c", // Warm yellow for strings
      },
    },
    {
      types: ["variable"],
      style: {
        color: "rgb(255, 184, 108)", // Soft orange
      },
    },
    {
      types: ["number"],
      style: {
        color: "#ff6f69", // Lighter shade of red
      },
    },
    {
      types: ["builtin", "char", "constant", "function"],
      style: {
        color: "#ffad60", // Warm orange to complement the primary color
      },
    },
    {
      types: ["punctuation"],
      style: {
        color: "#fff", // White for clarity
      },
    },
    {
      types: ["selector", "doctype"],
      style: {
        color: "rgb(255, 158, 157)", // Soft pink
        fontStyle: "italic",
      },
    },
    {
      types: ["class-name", "delimiter"],
      style: {
        color: "#ffd3b6", // Light orange
      },
    },
    {
      types: ["tag", "operator", "keyword"],
      style: {
        color: "#ff8b94", // Lighter red
      },
    },
    {
      types: ["boolean"],
      style: {
        color: "#ff7f50", // Coral color
      },
    },
    {
      types: ["property"],
      style: {
        color: "rgb(255, 127, 80)", // Soft coral for property
      },
    },
    {
      types: ["namespace"],
      style: {
        color: "rgb(255, 218, 185)", // Light peach
      },
    },
  ],
};

module.exports = theme;
