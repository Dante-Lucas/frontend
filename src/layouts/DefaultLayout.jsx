import { Outlet } from "react-router-dom";
export function DefaultLayout() {
    return(
        <div className="container mx-auto">
            <div>
                <main className="min-h-screen">
                    {/* Isso será o Feed ou qualquer outro componente chamado dentro do Route do DefaultLayout em Router.tsx */}
                    <Outlet />
                </main>
            </div>
        </div>
    )
}