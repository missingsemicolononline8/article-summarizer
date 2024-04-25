import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const articleApi = createApi({
    reducerPath:'articleApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://api.apyhub.com/ai',
        prepareHeaders:(headers) => {
            headers.set('Content-Type','application/json');
            headers.set('apy-token',import.meta.env.VITE_APY_HUB_KEY);

            return headers;
        }
    }),
    endpoints: (builder) => (
        {
            getSummary:builder.query({
                query:(params) => ({
                    url: '/summarize-url',
                    method: 'POST',
                    body: JSON.stringify({ url: params.articleUrl, summary_length: params.summaryLength }),
                }),
            })
        }
    )
})

export const  {useLazyGetSummaryQuery} = articleApi