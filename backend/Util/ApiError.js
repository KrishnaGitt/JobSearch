class ApiError extends Error{
    constructor(status,message="Something Went wrong"){
        super(status)
        this.message=message
    }
}

export{ApiError}