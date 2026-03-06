import { getAllSlugs, getProgramBySlug } from "@/data/programs";
import ProgramaClient from "./ProgramaClient";

export function generateStaticParams() {
    return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const program = getProgramBySlug(slug);
    if (!program) return {};
    return {
        title: program.metaTitle,
        description: program.metaDesc,
    };
}

export default async function ProgramaPage({ params }) {
    const { slug } = await params;
    const program = getProgramBySlug(slug);
    if (!program) {
        const { notFound } = require("next/navigation");
        notFound();
    }
    return <ProgramaClient program={program} />;
}
