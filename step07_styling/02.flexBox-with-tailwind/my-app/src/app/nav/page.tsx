import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
   <>
   <div>
<div className="m-5">
  <Link href="/step01_flex_display">step01_flex_display</Link>
</div>

<div className="m-5">
  <Link href="/step04c_flex_justify_between">
    step04c_flex_justify_between
  </Link>
</div>

<div className="m-5">
  <Link href="/step04d_flex_justify_around">
    step04d_flex_justify_around
  </Link>
</div>

<div className="m-5">
  <Link href="/step05_flex_wrap">step05_flex_wrap</Link>
</div>

<div className="m-5">
  <Link href="/step06_flex_align_items">step06_flex_align_items</Link>
</div>

<div className="m-5">
  <Link href="/step07a_flex_direction_col">
    step07a_flex_direction_col
  </Link>
</div>

<div className="m-5">
  <Link href="/step07b_flex_direction_col_start_between">
    step07b_flex_direction_col_start_between
  </Link>
</div>

<div className="m-5">
  <Link href="/step07c_flex_row_reverse">step07c_flex_row_reverse</Link>
</div>
</div>
   </>
  )
}

export default Nav