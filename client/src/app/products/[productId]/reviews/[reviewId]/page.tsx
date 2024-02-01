
export default function Reviews({ params }: {
    params: {
        productId: string,
        reviewId: string
    }
}) {
    return (
        <h2> productId: {params.productId}, reviewId: {params.reviewId} </h2>
    )
} 