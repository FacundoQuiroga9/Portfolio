import './Figma.css'
const Figma = (props) => (
  <svg
    className= {`figma-logo ${props.size}`}
    viewBox="0 0 1667 2500"
    {...props}
  >
    <path
      className='last-ball'
      fill="#0ACF83"
      d="M416.8 2500c230 0 416.7-186.7 416.7-416.7v-416.7H416.8c-230 0-416.7 186.7-416.7 416.7S186.8 2500 416.8 2500z"
    />
    <path
      className='third-ball'
      fill="#A259FF"
      d="M.2 1250c0-230 186.7-416.7 416.7-416.7h416.7v833.3H416.8C186.8 1666.7.2 1480 .2 1250z"
    />
    <path
    className='first-ball'
      d="M.2 416.7C.2 186.7 186.8 0 416.8 0h416.7v833.3H416.8C186.8 833.3.2 646.7.2 416.7z"
    />
    <path
    className='second-ball'
      d="M833.5 0h416.7c230 0 416.7 186.7 416.7 416.7s-186.7 416.7-416.7 416.7H833.5V0z"
    />
    <path
    className='fourth-ball'
      d="M1666.8 1250c0 230-186.7 416.7-416.7 416.7S833.5 1480 833.5 1250s186.7-416.7 416.7-416.7 416.6 186.7 416.6 416.7z"
    />
  </svg>
)
export default Figma
