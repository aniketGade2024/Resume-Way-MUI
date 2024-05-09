/* eslint-disable no-empty */
import { IGenerateQuestionsPayload } from "@/types/generateQuestions";
import { GenerateQuestionResponseSchema } from "@/types/Schemas/generateQuestions";

import apiInstance, { apiURLs } from "./client";


export default async function GenerateQuestions(payload: IGenerateQuestionsPayload) {
    try {
        const response = await apiInstance.post(apiURLs.generateQuestions, payload);
        const processedResponse = await response.data;
        console.log(processedResponse);
        return GenerateQuestionResponseSchema.parse(processedResponse);
    } catch {
        return GenerateQuestionResponseSchema.parse({})
    }

}