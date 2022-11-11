import { Button } from '@chakra-ui/react'
import React from 'react'

const Pagination = ({
    current,
    onChange,
    totalPage
}) => {
    const prev = <Button disabled={current === 1} onClick={() => onChange(current-1)} >Prev</Button>
    const currentPage = <Button>{current}</Button>
    const next = <Button disabled={current === totalPage} onClick = {() => onChange(current+1)} >Next</Button>
  return (
    <div>
        {prev}
        {currentPage}
        {next}
    </div>
  )
}

export default Pagination