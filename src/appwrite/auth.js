
import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client)
    }

    async createAccount({ email, password, name }) {
        try {
            await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.login(email, password)
            } else {
                return userAccount;
            }
        } catch (error) {
            console.log('Error in create Account', error);
        }
    }

    async login(email, password) {
        try {
            return await this.account.createEmailSession(email, password)
        } catch (error) {
            console.log('Error in login', error);
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log('Error in get Current user', error);
        }
        return null;
    }

    async logout() {
        try {
            await this.account.deleteSession('current')
        } catch (error) {
            console.log('Error in logout', error);
        }
    }

}


const authService = new AuthService();

export default authService;