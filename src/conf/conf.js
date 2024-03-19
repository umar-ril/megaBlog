const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWIRTE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWIRTE_PROJECT_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWIRTE_COLLECTION_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWIRTE_DATABASE_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWIRTE_BUCKET_ID)
}

export default conf