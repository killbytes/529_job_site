import { Navigate, Route, Routes } from 'react-router';
import { JobsPage } from './pages/JobsPage/JobsPage';
import { VacancyPage } from './pages/VacancyPage/VacancyPage';
import {Layout} from "@/Layout.tsx";
import {VacanciesLayout} from "@/pages/VacanciesLayout/VacanciesLayout.tsx";

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/vacancies" element={<VacanciesLayout />}>
                    <Route index element={<Navigate to="moscow" replace />}/>
                    <Route path="moscow" element={<JobsPage />} />
                    <Route path="petersburg" element={<JobsPage />} />
                </Route>
                <Route path="/vacancies/:id" element={<VacancyPage />}/>
            </Route>
            <Route path="/" element={<Navigate to="/vacancies" replace />}/>
            <Route path="*" element={<Navigate to="/vacancies" replace />}/>
        </Routes>
    );
}

export default App;