import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/login", 'Formik/login.tsx'),
    route("/query", 'Queries/index.tsx'),
    route("/xml", 'Queries/xml.tsx'),
    route('/fetch', 'Queries/fetch.tsx'),
    route('/axios', 'Queries/axios.tsx'),
    route('/patientDetails', 'patient/index.tsx'),
    
] satisfies RouteConfig;
