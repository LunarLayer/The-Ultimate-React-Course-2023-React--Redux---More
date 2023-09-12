import { useState } from "react";
import PropTypes from "prop-types";

TextExpander.propTypes = {};

export default function TextExpander({
  collapsedNumWords = 10,
  expandButtonText = "Expand column",
  collapseButtonText = "Collapse column",
  buttonColor = "blue",
  expanded = false,
  className,
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const textContent = isExpanded
    ? children
    : children.split(" ").splice(0, collapsedNumWords).join(" ") + "... ";

  const buttonStyle = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "6px",
    color: buttonColor,
  };

  return (
    <div className={className}>
      {textContent}
      <button style={buttonStyle} onClick={() => setIsExpanded((exp) => !exp)}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
