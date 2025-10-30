/** 
 * @param {Error} error - Any thrown error. 
 * @returns User-friendly error message. 
 */
const errorHandler = (err) => {
    return err.message || "Unknown error occurred."; 
}

export default errorHandler; 