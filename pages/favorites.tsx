import { useProfile } from "@/hooks/useProfile"
import { NextPageAuth } from "@/providers/auth.provider/auth-page-types"
import Meta from "@/ui/Meta"
import Catalog from "@/ui/catalog/Catalog"
import Layout from "@/ui/layout/Layout"

const FavoritePage: NextPageAuth = () => {
    const {profile} = useProfile()

    return (
        <Meta title="Избранное">
            <Layout>
                <div className="h-20">
                <Catalog products={profile?.favorites || []} title="Избранное"></Catalog>
                </div>
                <div className="h-80"></div>
                <div className="h-80"></div>
            </Layout>
        </Meta>
    )
}

FavoritePage.isOnlyUser = true

export default FavoritePage