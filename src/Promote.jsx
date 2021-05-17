import React from 'react';
import Square from './Square'
import { move} from './Game'
const promotionPieces= ['r','n','b','q']
export default function Promote({promotion : {from ,to,color},}){
    return <div className="w-100 h-100 d-flex flex-wrap">{promotionPieces.map((p,i)=>(
        <div key={i}   className="w-50 h-50">
            <Square black={i % 3 ===0}>
            <div className="piece-container" onClick={()=>move(from,to,p)}>
                <img className="piece cursor-pointer" alt="" src={ `./assets/${p}_${color}.png`}/></div>
            </Square>
           </div>
    ))}</div>
}