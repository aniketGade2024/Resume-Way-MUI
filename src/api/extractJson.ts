/* eslint-disable no-empty */
import { IExtractJsonPayload } from "@/types/extractJson";

import apiInstance, { apiURLs } from "./client";


const ExtractResumeJson = async (payload: IExtractJsonPayload) => {
    try {
        const response = await apiInstance.post(apiURLs.extractResumeJson, payload);
        const processedResponse = await response.data;
        return processedResponse;
    } catch {
        return {
            success: false, error: true
        }
    }

}


const ExtractJDJson = async (payload: IExtractJsonPayload) => {
    try {
        const response = await apiInstance.post(apiURLs.extractJdJson, payload);
        const processedResponse = await response.data;
        return processedResponse;
    } catch {
        return {
            success: false, error: true
        }
    }

}



export { ExtractJDJson, ExtractResumeJson }