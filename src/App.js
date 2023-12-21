import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Main from "./components/Main/Main";

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
