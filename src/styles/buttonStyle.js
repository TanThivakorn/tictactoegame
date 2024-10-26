export const buttonStyle = ({padding = 1, disable = false}) => ({
  border: 1,
  backgroundColor: "black",
  color: "white",
  cursor: "default",
  "&:hover": {
    backgroundColor: "white",
    color: "black",
    cursor: disable ? "default" : "pointer"
  },
  padding: padding,
});

export const squareButtonStyle = ({disable = false}) => ({
  width: 100,
  height: 100,
  color: "white",
  border: 1,
  borderColor: "white",
  fontSize: 100,
  cursor: "default",
  "&:hover": {
    cursor: disable ? "default" : "pointer"
  },
})