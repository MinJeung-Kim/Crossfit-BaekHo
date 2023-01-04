import React from 'react'
import DataGrid from '../../components/DataGrid/DataGrid'
import Pagination from '../../components/Pagination/Pagination'
import styles from './Users.module.css'

export default function Users() {
  return (
    <article className={styles.users}>
      <DataGrid />
      {/* <Pagination/> */}
    </article>
  )
}
