import axios from 'axios'
import {useState} from 'react'
import { useMutation, gql } from '@apollo/client'
import { useRouter } from 'next/router'

const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
        createProduct(seller: $seller, createProductInput: $createProductInput){
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationProduct(){
    const router = useRouter()
    
    const [createProduct] = useMutation(CREATE_PRODUCT)

    const onClickSubmit = async () => {
        try {
            const result = await createProduct({ 
                variables: { 
                    seller: "철수",
                    createProductInput: {
                        name: "마우스",
                        detail: "좋은마우스",
                        price: 1000
                    }
                } 
            })
            console.log(result.data.createProduct._id) // 9e84a7c8-454d-4edf-9f9a-c8f8c918dea9
            router.push(`/05-08-dynamic-routed-product/${result.data.createProduct._id}`)
        } catch(error){
            console.log(error.message)
        }
        
        // const apple = 3
        // const banana = 10
        // console.log("철수는 사과를 " + apple + "개 가지고 있고, 바나나를 " + banana + "개 가지고 있어요")
        // console.log(`철수는 사과를 ${apple}개 가지고 있고, 바나나를 ${banana}개 가지고 있어요`)

    }

    // const onChangeMyWriter = (event) => {
    //     setMyWriter(event.target.value)
    // }

    return (
        <>
            판매자: <input type="text" /><br />
            상품명: <input type="text" /><br />
            상품내용: <input type="text" /><br />
            상품가격: <input type="text" /><br />
            <input type="number" />
            <button onClick={onClickSubmit}>상품 등록하기</button>
        </>
    )

}