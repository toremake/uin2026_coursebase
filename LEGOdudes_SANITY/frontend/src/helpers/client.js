import {createClient} from '@sanity/client'

const client = createClient({
    projectId: "s1yi760h",
    dataset: "production",
    useCdn: true,
    apiVersion: "2026-04-13"
})

export default client