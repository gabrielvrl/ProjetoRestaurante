import React, { useEffect, useState, useMemo } from 'react';
import './Style.css'
import styled from 'styled-components'
import { useTable } from 'react-table'

import logo from '../assets/logo.svg'
import api from '../services/api';


const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
  } = useTable({
      columns,
      data,
  })

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}


export default function VerifySoldProduct({ history }){
    function handleReturnHome(e){
        e.preventDefault();
        history.push('/')
    }


  const columns = useMemo(
    () => [
      {
        Header: 'Produto',
        accessor: 'col1',
      },
      {
        Header: 'Preço em R$',
        accessor: 'col2',
      },
      {
        Header: 'Quantidade Vendida',
        accessor: 'col3',
      },
    ],
    []
  );

  const [listProducts, setListProducts] = useState([])
  useEffect(() => {
    async function loadProducts(){
      const response = await api.get('/products', {

      })
    setListProducts(response.data)
    }
    loadProducts()
  },[])

  const data = listProducts.map(product => {
    return { col1: product.name, col2: product.price, col3: product.sold }
  })

  return(
      <div className="register-container">
          <a href="/">
              <img src={logo} alt="Restaurante Padre Cícero" />
          </a>
          <form> 
              <h3> Pagina para verificar produtos tabelados e vendas </h3>
              <Styles>
                <Table columns={columns} data={data} />
              </Styles>
              <button onClick={handleReturnHome} type="returnHome">Retornar para a Home</button>
          </form>
      </div>
  );
}
