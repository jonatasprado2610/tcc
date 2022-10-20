<div className='xc'>
<div className='xc2'>
    <div className='imgxx'>
      <img src={exibirImagem()} />
    
    </div>
    <div>
       <p>{info.nome}</p>
    </div>
    <div>
        <img src='./assets/images/-.png' />
    </div>

</div>
<div className='xc3' >
    <div >
    <label>Qtd</label>
    <select onChange={e => alterarQuantidade(e.target.value)}  value={qtdproduto} >
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
    </select>
    </div>
    <div>
        <p>R$:5000</p>
    </div>
    <div className='subtotal'>
    <div>Subtotal</div>
    <div>R$4441</div>
</div>
</div>


</div>