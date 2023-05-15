import BaseLayout from "@/components/layouts/BaseLayout";
import {useRouter} from "next/router";
const Portfolio = () => {
    const router = useRouter();
    return (
        <BaseLayout>
            <h1>Portfolio page </h1>
            <h1>{router.query.id}</h1>
        </BaseLayout>
    );
    }
export default Portfolio;