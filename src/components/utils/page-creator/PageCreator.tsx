"use client";

import React from "react";
import PageRenderer from "@/components/constructor/page-render/PageRender";
import type { PageSchema } from "@/components/constructor/page-render/types";

type PageCreatorProps = {
    schema: PageSchema;
};

export default function PageCreator({ schema }: PageCreatorProps) {
    return <PageRenderer schema={schema} />;
}
