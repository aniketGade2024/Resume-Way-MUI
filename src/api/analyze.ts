/* eslint-disable no-empty */
import { IAnalyzePayload } from "@/types/analyze";
import { ResponseAnalyzeSchema } from "@/types/Schemas/analyze";

import apiInstance, { apiURLs } from "./client";


export default async function Analyze(payload: IAnalyzePayload) {

    try {
        const response = await apiInstance.post(apiURLs.analyze, payload);
        const processedResponse = await response.data;
        return ResponseAnalyzeSchema.parse(processedResponse)
    } catch {
        return ResponseAnalyzeSchema.parse({})
    }

}