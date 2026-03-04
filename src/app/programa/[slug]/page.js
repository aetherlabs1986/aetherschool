import { getAllSlugs, getProgramBySlug } from "@/data/programs";
import ProgramaClient from "./ProgramaClient";

export function generateStaticParams() {
    return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
    const program = getProgramBySlug(params.slug);
    if (!program) return {};
    return {
        title: program.metaTitle,
        description: program.metaDesc,
    };
}

export default function ProgramaPage({ params }) {
    const program = getProgramBySlug(params.slug);
    if (!program) {
        const { notFound } = require("next/navigation");
        notFound();
    }
    return <ProgramaClient program={program} />;
}
