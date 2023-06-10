import { ProductService } from "@/services/product/product.service"
import Meta from "@/ui/Meta"
import Catalog from "@/ui/catalog/Catalog"
import Layout from "@/ui/layout/Layout"
import { useQuery } from "@tanstack/react-query"
import { NextPage } from "next"
import { useRouter } from "next/router"


const SearchPage: NextPage = () => {
    const { query } = useRouter()

    const { data } = useQuery(['Поиск товаров', query.term], () =>
    ProductService.getAll({
        searchTerm: query.term as string
    })
    )

    return (
        <Meta title="Поиск">
            <Layout>
                <Catalog products={data?.products || []}
                title={`Поиск по запросу "${query.term || ''}"`}/>
                <div className="h-80"></div>
            </Layout>
        </Meta>
    )
}

export default SearchPage
