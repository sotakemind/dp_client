import { FC, PropsWithChildren } from "react";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
    return (
    <div>
        <Header />
        <div className="grid" style={{gridTemplateColumns: '1fr 6fr'}}>
            <Sidebar />
            <main className="p-12">{children}
            <div className="mb-20"></div></main>
        </div>
        <div className="bg-footer h-10 flex justify-center items-center text-white text-xs">
        © Интернет-магазин бытовой техники и электроники, 2023
        </div>
    </div>
    )
}

export default Layout