import "./Html.css"
const Html = (props) => (
  <svg
    className= {`html-logo ${props.size}`}
    viewBox="0 0 433.6 612"
    {...props}
  >
    <path className="left-half" d="M39.5 562.8 0 120.3h433.6l-39.5 442.5L216.5 612z" />
    <path className="right-half" d="m216.8 574.4 143.5-39.8L394 156.5H216.8z" />
    <path
      className="left-number"
      fill="#EBEBEB"
      d="M216.8 320.6H145l-5-55.6h76.8v-54.3H80.7l1.3 14.6 13.3 149.6h121.5zM216.8 461.6h-.2l-60.5-16.3-3.9-43.3H97.7l7.7 85.2 111.1 30.9.3-.1z"
    />
    <path
    className="html-title"
    d="M40.3 0h27.6v27.3h25.2V0h27.6v82.5H93.2V54.9H67.9v27.6H40.3V0zM157 27.4h-24.3V0h76.2v27.4h-24.3v55.2H157V27.4zM221 0h28.8l17.7 29 17.7-29H314v82.5h-27.5V41.6l-19 29.3h-.5l-19-29.3v40.9h-27V0zM327.6 0h27.6v55.2H394v27.3h-66.4V0z" />
    <path
      className="right-number"
      d="M216.6 320.6v54.3h66.8l-6.3 70.4-60.5 16.3v56.5l111.3-30.9.8-9.1 12.8-142.9 1.3-14.6h-14.7zM216.6 210.7V265h131.1l1.1-12.2 2.5-27.5 1.3-14.6z"
    />
  </svg>
)
export default Html
