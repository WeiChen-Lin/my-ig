interface Props {
  fill?: string
  className?: string
}

const Logo = (props: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={353.333}
      height={65.333}
      viewBox='0 0 265 49'
      {...props}
    >
      <path d='M6.7 2.7c-.4.3-.7 10.7-.7 23V48h12v-7c0-3.9.3-7 .6-7s4.4 3.2 9.1 7.2l8.5 7.2 2.5-2.9c5-6.1 5-5.8-4.2-12.6-4.7-3.4-8.5-6.4-8.5-6.7 0-.4 3.5-4.2 7.7-8.4l7.8-7.8-4.1-4.1-4.1-4.1-7.4 8.6-7.4 8.6-.3-8.5-.3-8.5h-5.3c-2.9 0-5.6.3-5.9.7zM86 5.6l-4 3.6V28.9l11.3.3 11.2.3.3 5.2.3 5.3h-6c-4.8 0-6.1-.3-6.1-1.5 0-1.1-1.2-1.5-4.8-1.5-5.9 0-7.2 1.2-7.2 6.7V48h27.6l3.7-3.8 3.7-3.8V21H93V11h6.5c5.1 0 6.5.3 6.5 1.5 0 1.9 8 2.1 9.8.3.7-.7 1.2-3.4 1.2-6V2H90l-4 3.6zM122 25v23h11V30h8v18h11V21h-19V2h-11v23zM47 34.5V48h22.6l3.7-3.8 3.7-3.8V21H65v19.1l-3.2-.3-3.3-.3-.3-9.3-.3-9.2H47v13.5zM162 24.5v3.4l7.7.3c5 .2 7.8.7 8.1 1.5.3 1-1.3 1.3-5.5 1.3-5.5 0-6.1.3-9.6 3.8-3.2 3.3-3.7 4.4-3.7 8.5V48h15.4c13.1 0 15.5-.2 16-1.6.9-2.4.7-5.4-.4-5.4-.6 0-1-4-1-10V21h-27v3.5zM178 39c0 1.7-.7 2-3.9 2-4 0-5.7-1.1-4.6-3 .3-.6 2.4-1 4.6-1 3.2 0 3.9.3 3.9 2zM197 34.5V48h11v-3.3c0-3.2.5-3.6 9.5-8.6l9.5-5.3-2.5-4.1c-1.3-2.3-2.9-4.3-3.4-4.5-.5-.2-3.2 1.1-6 2.8-2.9 1.6-5.6 3-6.1 3-.6 0-1-1.6-1-3.5V21h-11v13.5zM234.7 24.8l-3.7 3.8V48h28l1-2.6c.6-1.4 1-3 1-3.5s-4.3-.9-9.6-.9c-7.2 0-9.5-.3-9.2-1.3.3-.7 2.8-1.3 6.4-1.5 5-.3 6.4-.8 9.2-3.4 2.8-2.8 3.2-3.8 3.2-8.5V21h-22.6l-3.7 3.8zm16.1 4.9c.2.9-1 1.3-4.2 1.3-4.3 0-5.5-.7-3.9-2.4 1.2-1.1 7.6-.2 8.1 1.1z' />
    </svg>
  )
}

export { Logo }
