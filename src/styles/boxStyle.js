export const boxScoreStyle = {
  width: "100px", 
  height: "100px", 
  backgroundColor: "black", 
  display: "flex", 
  justifyContent: "center", 
  alignItems: "center",
  border: "1px solid #ccc", 
  borderRadius: "8px",
  border: 1,
  borderColor: "white"
};

export const boxNameStyle = ({width = 200, justifyContent = "center"}) => ({
  width: width, 
  height: "80px", 
  backgroundColor: "black", 
  display: "flex", 
  justifyContent: justifyContent, 
  alignItems: "center",
});
