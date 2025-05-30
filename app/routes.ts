import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/login", 'Formik/login.tsx'),
    route("/query", 'Queries/index.tsx'),
    route("/xml", 'Queries/xml.tsx'),
    route('/fetch', 'Queries/fetch.tsx'),
    route('/axios', 'Queries/axios.tsx'),
    route('/sidebar', 'patient/SideBar/index.tsx'),
    route('/overview', 'patient/Overview/index.tsx', [
        route('/overview/contacts', 'patient/Overview/ContactsList/index.tsx'),
         route('/overview/personal-info', 'patient/Overview/PersonalInfo/index.tsx'),
        route('/overview/:product', 'patient/Overview/PersonalInfo/index.tsx'),
    ]),
] satisfies RouteConfig;
