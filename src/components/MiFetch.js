
const MiFetch = (time, task) => {
    return new Promise ((resolve, reject) => {
        setTimeout (()=>{
            resolve(task);
        }, time)
    }
    
    )
}
export default MiFetch