import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout";

function App() {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route index element={<Main/>}/>
            </Route>
        </Routes>
    );
}

export default App;
