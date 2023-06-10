import { useActions } from "@/hooks/useActions"
import { useAuth } from "@/hooks/useAuth"
import { TypePaginationProducts } from "@/types/product.interface"
import Meta from "@/ui/Meta"
import CatalogPagination from "@/ui/catalog/CatalogPaginaton"
import Layout from "@/ui/layout/Layout"
import { FC } from "react"

const Home: FC<TypePaginationProducts> = ({products, length}) => {

  const { user } = useAuth()
  const { logout } = useActions()

  return (
    <Meta title='Home'>
      <Layout>
      

        <CatalogPagination title="Свежие товары" data={{products, length}} />

      </Layout>
    </Meta>
  )
}

export default Home