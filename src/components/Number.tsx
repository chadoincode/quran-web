type NumberProps = {
  nomor: number;
}

const Number = ({nomor}: NumberProps) => {
  return(
    <div className="h-8 w-8 rounded-full bg-accent-light flex flex-col 
      justify-center items-center text-light font-bold text-xs md:text-sm">
      {nomor}
    </div>
  )
}

export default Number