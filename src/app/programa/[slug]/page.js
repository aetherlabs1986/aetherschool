import { notFound } from "next/navigation";
import { getAllSlugs, getProgramBySlug } from "@/data/programs";
import ProgramaClient from "./ProgramaClient";

export const dynamicParams = true;

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
        notFound();
    }

    return <ProgramaClient program={program} />;
}
