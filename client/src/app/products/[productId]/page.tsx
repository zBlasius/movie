export default function ProductDetails({params} : {
    params: {productId: string}
}){
    return (
        <h2> Detalhes do produto {params.productId} </h2>
    )
} 