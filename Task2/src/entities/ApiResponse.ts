class ApiResponse {
    public status: any;
    public message: any;
    public data: any;

    constructor(status, message, data = null) {
        this.status = status;
        this.message = message;
        if (data) {
            this.data = data;
        }
    }
}

export default ApiResponse;
