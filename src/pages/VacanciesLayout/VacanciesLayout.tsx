
import { Tabs, Container } from '@mantine/core';
import { Link, Outlet, useLocation } from 'react-router';

export function VacanciesLayout() {
    const { pathname } = useLocation();

    const activeTab = pathname.startsWith('/vacancies/petersburg')
        ? 'petersburg'
        : 'moscow';

    return (
        <Container size="md">
            <Tabs value={activeTab}>
                <Tabs.List>
                    <Tabs.Tab value="moscow" component={Link} to="/vacancies/moscow">
                        Москва
                    </Tabs.Tab>

                    <Tabs.Tab value="petersburg" component={Link} to="/vacancies/petersburg">
                        Санкт-Петербург
                    </Tabs.Tab>
                </Tabs.List>

                <Outlet />
            </Tabs>
        </Container>
    );
}
