import './index.scss'


export default function CrdEndereco({item : {referencia,logradouro,cep,bairro,cidade,estado,numero,complemento }}){

 

    return(
        <main>
            
                <div className='cxx'>
                   <div><img src='./assets/images/ps.png ' /></div>        
                    
                <div>
                    <h3>{referencia}</h3>
                </div>
                <div>
                    <p>{logradouro}, {numero}, {complemento}</p>
                    <p>{cep} {bairro} {cidade}/{estado}</p>
                </div>

            </div> 
        </main>
         
    )
}