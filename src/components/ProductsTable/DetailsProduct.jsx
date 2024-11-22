import React from 'react'

const DetailsProduct = () => {
  return (
    <>
        <div className={styles.caminhoPage}>
            <p>{caminho}</p>
        </div>
        <section>
            <div className={styles.slideDetailsProduct}>

            </div>
            <div className={styles.details}>
                <h1>Titulo do Produto</h1>
                <h3>preço</h3>
                <h5>descrição</h5>
                <p>descrição</p>
                <div className={styles.boxCores}></div>
                <div className={styles.btnAddCart}></div>
            </div>
            
        </section>
    </>
  )
}

export default DetailsProduct