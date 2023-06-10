import { useActions } from "@/hooks/useActions";
import { useAuth } from "@/hooks/useAuth";
import { CategoryService } from "@/services/category.service";
import Loader from "@/ui/Loader";
import { useQuery } from "@tanstack/react-query";
import cn from 'classnames';
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

const Sidebar: FC = () => {
    const { data, isLoading } = useQuery(
        ['get categories'], () => CategoryService.getAll(),
        {
            select: ({ data }) => data
        }
    )

    const { asPath } = useRouter()

    const { user } = useAuth()
    const { logout } = useActions()

    return (
    <aside className=" bg-secondary flex flex-col justify-between h-full"

    >
        <div>
            {isLoading ? (
                <Loader />
                ): data ? (
                    <>
                    <div className="text-xl text-white mt-4 mb-6 ml-6">
                        Категории: 
                    </div>
                    <ul>
                        {data.map(category => (
                            <li key={category.id}>
                                <Link className ={cn("block text0lg my-3 px-10 hover:text-primary transition-colors duration-200",
                                asPath == `/category/${category.slug}`
                                ? 'text-primary'
                                : 'text-white'
                                )}
                                href={`/category/${category.slug}`}
                                >
                                {category.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    </>
                ) : (
                    <div>Категория не найдена!</div>
                )}
        </div>
        {/* {!! user && (
            <button className="text-white flex items-center ml-10 mt-80"
            onClick={() => logout()}
            >
            <FiLogOut />
            <span className="ml-2">Выйти</span>
            </button>
        )}
        <Link href = "/auth" >
        {!user && (
            <button className="text-white flex items-center ml-10 mb-20">
            <FiLogOut />
            <span className="ml-2">Войти</span>
            </button>
        )}
        </Link> */}
    </aside>
    )
}

export default Sidebar