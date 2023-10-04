import "./Css.css"
const Css = (props) => (
  <svg
    className={`css-logo ${props.size}`}
    viewBox="0 0 335.3 469.7"
    {...props}
  >
    <path className='left-mitad' d="m303.9 433-136.3 36.7L31.4 433 0 92.5h335.3z" />
    <path className='right-mitad' d="M167.6 120.1v320.3l.3.1 110.3-29.7 25.4-290.7z" />
    <path className='css-title' d="M90.3 42.4V22.2h29.6V0H68.2v62.7h51.7V42.4zM173.1 22.2h20.7V0H142v22.2c6.9 6.9 10.5 10.2 20.5 20.3H142v20.2h51.8V42.4l-20.7-20.2zM246.5 22.2h20.7V0h-51.8v22.2c6.9 6.9 10.5 10.2 20.6 20.3h-20.6v20.2h51.8V42.4l-20.7-20.2z" />
    <path
      className='piece-number'
      d="M167.5 205.2 70 245.8l3.3 40.2 94.2-40.3 100.3-42.9 4.1-41.1z"
    />
    <path
      className='whole-number'
      d="m70.2 245.8 3.2 40.2 144.6.5-3.2 53.6-47.6 13.4-45.7-11.6-2.8-33.3H76.2l5.5 64.3 86 25.4 85.5-25 11-127.5zM61.3 161.7h210.6l-4.1 41.1H66.3z"
    />
  </svg>
)
export default Css
